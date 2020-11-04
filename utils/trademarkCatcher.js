const errorHandler = require('../utils/errorHandler')
const request      = require('request');
var needle         = require('needle');
var cheerio        = require('cheerio');

module.exports.remoteSearch = async function (options) {

    try {
        // console.log('ready ')

        let classes = '';
        let result = [];

        if (options.classes.length === 45) {
            return  await requestPromise(options.query, '')
        }

        if (options.strong) {
            classes = options.classes.toString().replace(/,/g, '+');

            const candidate = await requestPromise(options.query, classes)

            result = result.concat(candidate);

        } else {
            for (let i = 0; i < options.classes.length; ++i) {
                const candidate = await requestPromise(options.query, options.classes[i])
                // console.log('class', options.classes[i], 'counts', candidate.length)
                result = result.concat(candidate);
            }
        }

        // console.log(result)
        return result;

    } catch (e) {
        console.log('error:', e.message)
    }
}

function requestPromise(text, classes) {
    return new Promise((resolve, reject) => {

        //===== указываем параметры запроса
        const options = {
            'method': 'POST',
            'url': 'https://www.znakoved.ru/wtms.php?action=search&rnd0.4649126500901677=',
            'headers': {
                'User-Agent': 'PostmanRuntime/7.26.5'
            },
            formData: {
                'view[page]': '1',
                'view[size]': '25',
                'terms[text]': `${text}`,
                'terms[mode]': '3',
                'reg-ids': '',
                'app-ids': '',
                'holder[text]': '',
                'holder[mode]': '3',
                'address[text]': '',
                'address[mode]': '3',
                'curator[text]': '',
                'curator[mode]': '3',
                'reg-dates[from]': '',
                'reg-dates[mode]': '0',
                'app-dates[from]': '',
                'app-dates[mode]': '0',
                'classes': `${classes}`,
                'sort[name]': '0',
                'sort[mode]': '1'
            }
        };

        request(
            options,
            function (error, response, body) {

                //===== если произошла ошибка, то возвращаем ее
                if (error) {
                    reject(error)

                } else {

                    //===== если нет, то выдираем данные из JSON-ответа
                    // console.log(JSON.parse(body));
                    const resp = JSON.parse(body);

                    //===== и возвращаем их
                    resolve(resp.results)
                }
            });
    })
}

function requestPromise2(number) {
    return new Promise((resolve, reject) => {


        const URL = `http://www.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=${number}&TypeFile=html`;

        needle.get(URL, function(error, res){
            if (error) reject(error);



            // console.log($('.bib'));
            console.log(res.statusCode);

            var $ = cheerio.load(res.body);
            console.log(res.body);
            // $('.bib').each(function() {
            //     console.log($(this));//.attr('href'));
            // });

            resolve(true);
        });

        //===== указываем параметры запроса
        // const options = {
        //     url: `http://www.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=${number}&TypeFile=html`,
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json'
        //     }
        // };
        //
        // //===== делаем запрос к серверу на получение данных
        // request(
        //     options,
        //     function (error, response, body) {
        //
        //         //===== если произошла ошибка, то возвращаем ее
        //         if (error) {
        //             reject(error)
        //
        //         } else {
        //
        //             //===== если нет, то выдираем данные из JSON-ответа
        //             console.log(body)
        //             // const resp = JSON.parse(body);
        //
        //             // const maxData = resp['history.cursor'].data[0][1];
        //             // const data = resp.history.data;
        //
        //             //===== и возвращаем их
        //             resolve({
        //                 max: 'maxData',
        //                 data: 'data'
        //             })
        //         }
        //     });
    })
}
