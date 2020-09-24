const cities = require('../model/cities.json');

const getAll = (req, res) => {
    console.log(req.url);
    
    res.send(cities);
};

module.exports = { getAll };
