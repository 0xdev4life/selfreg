module.exports = (error, res) => {
    res.status(500).json({
        action: "error",
        desct: error.message ? error.message : error
    })
}
