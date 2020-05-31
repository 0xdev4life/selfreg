module.exports = (res, error) => {
    res.status(500).json({
        success: false,
        message: error.message ? error.message : error
    })
    console.log(error.message ? error.message : error)
}
// // module.exports = (error, res) => {
// //     res.status(500).json({
// //         action: "error",
// //         desct: error.message ? error.message : error
// //     })
// // }
// module.exports = async function (error, res) {
//     try {
//
//         res.status(500).json({
//             action: "error",
//             desct: error.message ? error.message : error
//         })
//     } catch (e) {
//         res.status(500).json({key: 'some internal error'})
//     }
//
// }
