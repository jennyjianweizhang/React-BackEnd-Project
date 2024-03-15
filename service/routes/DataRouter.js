const express = require('express');
const router = express.Router();

const {addData, getData} =require('../controllers/DataController')

router.get('/getData', async (req, res) => {
        const result = await getData();
        res.send(result)
});


router.post('/addData', async (req, res) => {
        console.log(req.body);
        await addData(req.body); 
});

module.exports = router;