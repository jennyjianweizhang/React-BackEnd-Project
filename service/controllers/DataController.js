const DataModel = require('../model/DataModel')

exports.addData = async (data) => {

    try {
        const savedData = await DataModel.create(data);
        console.log('success' , savedData);
    } catch (error) {
        console.log('添加失败', error);
    }
}

exports.getData = async () => {
    try {
        console.log('获取成功');
        return await DataModel.find();
    } catch (error) {
        console.log('Not Found', error);
    }
};


