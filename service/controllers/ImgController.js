const ImageModel =require('../model/ImgModel')

exports.uploadImages = async (req, res, next) => {
    try {
        await ImageModel.insertMany(req.files);
        console.log('success');

    } catch (err) {
        console.log('error', err);
    }
};

// exports.getImages = async () => {
//     try {
//         console.log('Images fetched successfully');
//         return await ImageModel.find();
//     }catch(error){
//         console.log('Error fetching images', error);
//     }
// };


