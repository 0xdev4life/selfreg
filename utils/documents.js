const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const fs = require('fs');
const path = require('path');

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


module.exports.createDocuments = (user, application, path) => {

    const tax = fs
        .readFileSync(path.resolve(__dirname, 'templates', 'tax.docx'), 'binary');

    const proxy = fs
        .readFileSync(path.resolve(__dirname, 'templates', 'proxy.docx'), 'binary');

    const permission = fs
        .readFileSync(path.resolve(__dirname, 'templates', 'permission.docx'), 'binary');

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
        applicantName: user.name,
        tax: application.tax
    });

    permissionDoc.setData({
        applicantName: user.name,
        tax: application.tax
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
    fs.writeFileSync(path.resolve(path, 'tax.docx'), buf);

    buf = proxyDoc.getZip()
        .generate({type: 'nodebuffer'});
// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve(path, 'proxy.docx'), buf);

    buf = permissionDoc.getZip()
        .generate({type: 'nodebuffer'});
// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve(path, 'permission.docx'), buf);
}
