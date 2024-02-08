const UserModel = require('../model/UserModel')

// 注册
exports.register = async (data) => {
    console.log('register', data);
    try {
        await UserModel.create(data)
    } catch (error) {
        console.log('添加失败', error);
    }
}

// 登录验证
exports.login = async (email) => {
    console.log(',,,', email);
    try {
        return await UserModel.findOne(email)
    } catch (error) {
        console.log('Not Found', error);
    }
}
