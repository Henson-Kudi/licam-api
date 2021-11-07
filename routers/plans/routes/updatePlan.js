const Plan = require('../../../mongooseModels/planSchema')


const updatePlan = async (req, res) =>{
    const _id = req.body._id
    Plan.findOneAndUpdate(_id, req.body, (err, result) =>{
        if (err) {
            return console.log(err);
        }
        res.send({message: 'Updated plan successfully.'})
    })
    
}

module.exports = updatePlan