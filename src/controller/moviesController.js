const movies = require('../model/movies.json');

const getAll = (req, res) => {
    console.log(req.url);
    
    res.send(movies);
};

module.exports = { getAll };
