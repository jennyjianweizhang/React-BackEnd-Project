const express = require('express');
const router = express.Router();

const {addData, getData} =require('../controllers/DataController')

router.get('/getData', async (req, res) => {
    try {
        const result = await getData();
        // res.json(result);
        res.send(result)
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.post('/addData', async (req, res) => {
    try {
        console.log(req.body);
        const result = await addData(req.body); 
        res.status(201).json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;