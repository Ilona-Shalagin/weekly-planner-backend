const WeeklyModel = require('./WeeklyModel')

module.exports.getPlan = async(req,res) => {
    const myPlan = await WeeklyModel.find();
    res.send(myPlan)
}

module.exports.savePlan = async(req, res) => {
    const {title} = req.body;
    WeeklyModel.create({title})
    .then ((data) => {
        console.log(' Plan added')
        res.send(data)
    })
}

module.exports.deletePlan = async (req, res) => {
    const{_id} = req.body
    WeeklyModel.findByIdAndDelete(_id)
    .then(() => res.send('Delete a plan'))
}

module.exports.editPlan = async (req, res) => {
    const {_id,title} = req.body
    WeeklyModel.findByIdAndUpdate(_id,{title})
    .then(() => res.send('Edited a plan'))
}