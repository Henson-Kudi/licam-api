const Plan = require('../../../mongooseModels/planSchema')

const getPlans = async (req, res) =>{
    Plan.find({}, (err, plans) =>{
        if (err) {
            return console.log(err);
        }
        res.send(plans)
    })
}

module.exports = getPlans;