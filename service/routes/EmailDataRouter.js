const express = require('express');
const router = express.Router();

const {addData, getData} =require('../controllers/EmailController')

router.get('/getEmailData', async (req, res) => {
        const result = await getData();
        res.send(result)
});


router.post('/addEmailData', async (req, res) => {
        console.log(req.body);
        await addData(req.body); 
});

module.exports = router;