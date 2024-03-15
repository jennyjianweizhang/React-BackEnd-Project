const express = require('express')
const formData = require('express-form-data');
// temporary directory to store files
const os = require('os');
const app = express()
const router = express.Router()
const multer = require('multer');
const path = require('path')
const {uploadImages, getImages} =require('../controllers/ImgController')

const parseOptions = {
    uploadDir: os.tmpdir(),
    autoClean: true, 
};
// Use express-form-data to parse non-file fields
app.use(formData.parse(parseOptions));
app.use(formData.format());

const fullPath = path.resolve(__dirname, '../static')
app.use(express.static(fullPath))

const storage = multer.diskStorage({
    destination: function (req, dile, cb) {
        const imageType = req.body.imageType; 
        const typeDirectory = {
            avatars: 'avatars',
            cards: 'cards',
            logos: 'logos',
            misc:'misc',
            flags:'flags',
            products:'products',
            system:'system',
        };
        const uploadDirectory = path.join(fullPath, typeDirectory[imageType] || ''); 
        cb(null, uploadDirectory)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const fileUpload = multer({ storage: storage })

router.post('/uploadMultiple',fileUpload.array('photo',10), async(req, res) => {
    try {
        await uploadImages(req, res);
        console.log(req.files); 
        res.send('Upload successful');
    } catch (err) {
        console.error('Upload error:', err);
    }
})

// router.get('/getImages', async(req, res) =>{
//     try{
//         const images = await getImages();
//         res.send(images)
//     }catch (err) {
//         console.error('Error fetching images:', err);
//     }
// })

module.exports = router