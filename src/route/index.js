const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send({
        title: "Some interesting cities to visit around the globe and why",
        date: '24/09/2020'
    })
});

module.exports = router;