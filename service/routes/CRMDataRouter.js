const express = require('express');
const router = express.Router();

const {addData, getData} =require('../controllers/CRMDataController')

router.get('/getCRMData', async (req, res) => {
        const result = await getData();
        res.send(result)
});


router.post('/addCRMData', async (req, res) => {
        console.log(req.body);
        await addData(req.body); 
});

module.exports = router;