const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const fs = require('fs');
const pathLocal = require('path');


// The error object contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({error: error}, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

//Load the docx file as a binary
var appDir = pathLocal.dirname(require.main.filename);

// console.log('appdir is', appDir)

const taxInput = pathLocal.resolve(appDir, 'templates', 'tax.docx')
const proxyInput = pathLocal.resolve(appDir, 'templates', 'proxy.docx')
const permissionInput = pathLocal.resolve(appDir, 'templates', 'permission.docx')

// console.log('inputs are', taxInput, proxyInput, permissionInput)




module.exports.createDocuments = (user, application, path) => {

    const taxOutput = pathLocal.resolve(path, 'tax.docx')
    const proxyOutput = pathLocal.resolve(path, 'proxy.docx')
    const permissionOutput = pathLocal.resolve(path, 'permission.docx')

    // console.log('outputs are', taxOutput, proxyOutput, permissionOutput)

    // console.log('lets read')
    const tax = fs.readFileSync(taxInput, 'binary');
    const proxy = fs.readFileSync(proxyInput, 'binary');
    const permission = fs.readFileSync(permissionInput, 'binary');
    // console.log('we are done reading')


    let taxZip = new PizZip(tax);
    let proxyZip = new PizZip(proxy);
    let permissionZip = new PizZip(permission);

    let taxDoc;
    let proxyDoc;
    let permissionDoc;
    try {
        taxDoc = new Docxtemplater(taxZip);
        proxyDoc = new Docxtemplater(proxyZip);
        permissionDoc = new Docxtemplater(permissionZip);
    } catch(error) {
        // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
        errorHandler(error);
    }

//set the templateVariables
    taxDoc.setData({
        applicantName: user.name,
        tax: application.tax
    });

    proxyDoc.setData({
         applicantInn: user.inn,
        applicantName: user.name,
        applicantOgrn: user.ogrn
    });

    permissionDoc.setData({
        trademarkName: application.name,
        applicantName: user.name,
        applicantAddress: user.address
    });

    try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        taxDoc.render()
        proxyDoc.render()
        permissionDoc.render()
    }
    catch (error) {
        // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
        errorHandler(error);
    }

    var buf = taxDoc.getZip()
        .generate({type: 'nodebuffer'});
// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(taxOutput, buf);

    buf = proxyDoc.getZip()
        .generate({type: 'nodebuffer'});
// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(proxyOutput, buf);

    buf = permissionDoc.getZip()
        .generate({type: 'nodebuffer'});
// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(permissionOutput, buf);
    return true;
}
