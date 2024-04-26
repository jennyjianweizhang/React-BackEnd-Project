const express = require('express');
const router = express.Router();

const {addData, getData} =require('../controllers/ChatController')

router.get('/getChatData', async (req, res) => {
        const result = await getData();
        res.send(result)
});


router.post('/addChatData', async (req, res) => {
        console.log(req.body);
        await addData(req.body); 
});

module.exports = router;