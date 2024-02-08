const DataModel =require('../model/DataModel')

exports.addData = async (req, res) => {
    const {name, data} = req.body;

    try {
        const savedData = await DataModel.create({name, data});
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getData = async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
