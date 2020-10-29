const errorHandler = require('../utils/errorHandler')
const request      = require('request');
var needle         = require('needle');
var cheerio        = require('cheerio');

module.exports.checkIntegrity = async function () {

    try {
        // console.log('ready')
        // const cand = await requestPromise('061998')
    } catch (e) {
        console.log('error:', e.message)
    }
    // let candidate = await Stock.countDocuments()
    //
    // console.log('проверка количества тикеров:', candidate)
    //
    // if (candidate === 0) {
    //
    //     console.log('осуществляем загрузку')
    //
    //     await Stock.insertMany(keys.stocks)
    //
    //     candidate = await Stock.countDocuments()
    //
    //     console.log('установлено тикеров: ', candidate)
    // } else {
    //     console.log('всё в порядке')
    // }
    //
    // await update()
}

function requestPromise(number) {
    return new Promise((resolve, reject) => {

        //===== указываем параметры запроса
        const options = {
            url: `http://www.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=${number}&TypeFile=html`,
            method: 'GET',

        };

        //===== делаем запрос к серверу на получение данных
        request(
            options,
            function (error, response, body) {

                //===== если произошла ошибка, то возвращаем ее
                if (error) {
                    reject(error)

                } else {

                    //===== если нет, то выдираем данные из JSON-ответа
                    console.log(body)
                    // const resp = JSON.parse(body);

                    // const maxData = resp['history.cursor'].data[0][1];
                    // const data = resp.history.data;

                    //===== и возвращаем их
                    resolve({
                        max: 'maxData',
                        data: 'data'
                    })
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
