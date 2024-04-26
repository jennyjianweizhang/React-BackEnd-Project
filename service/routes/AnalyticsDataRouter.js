const express = require('express');
const router = express.Router();

const {addData, getData} =require('../controllers/AnalyticsController')

router.get('/getAnalyticsData', async (req, res) => {
        const result = await getData();
        res.send(result)
});


router.post('/addAnalyticsData', async (req, res) => {
        console.log(req.body);
        await addData(req.body); 
});

module.exports = router;