const getPlans = require('./routes/getPlans');
const addPlan = require('./routes/addPlan');
const deletePlan = require('./routes/deletePlan');
const updatePlan = require('./routes/updatePlan');
const router = require('express').Router()

router.route('/').get(getPlans).post(addPlan).patch(deletePlan).put(updatePlan)

module.exports = router