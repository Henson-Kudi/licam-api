const Plan = require('../../../mongooseModels/planSchema')

const addPlan = (req, res) => {
    const plan = new Plan(req.body);

    plan.save(err => {
        if (err) {
            return console.log(err);
        }
        console.log('Plan saved successfully');
    })
    res.send({message : 'Plan saved successfully'})
}

module.exports = addPlan