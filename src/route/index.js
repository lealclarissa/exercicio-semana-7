const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send({
        title: "Some of my favorite movies",
        date: '23/09/2020'
    })
});

module.exports = router;