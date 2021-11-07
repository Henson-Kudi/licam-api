const Plan = require('../../../mongooseModels/planSchema')

const deletePlan = (req, res) => {
    const _id = req.body._id
    
    Plan.findOneAndDelete(_id, req.body, (err, result) =>{
        if (err) {
            return console.log(err);
        }
        res.send({message: 'Deleted plan successfully.'})
    })
    
}

module.exports = deletePlan