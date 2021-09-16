const { isNumeric } = require('../helpers/helpers')

const getRandomNumber = (req, res, next) => {
    const max = 10, min = 1;
    res.json({
        value: Math.floor(Math.random() * (max - min + 1) + min)
    })
}

const getRandomNumberInRange = (req, res, next) => {
    let { max, min } = req.query;
    max = isNumeric(max) ? parseInt(max) : 10
    min = isNumeric(min) ? parseInt(min) : 10
    res.json({
        value: Math.floor(Math.random() * (max - min + 1) + min)
    })
}

module.exports = {
    getRandomNumber,
    getRandomNumberInRange
}