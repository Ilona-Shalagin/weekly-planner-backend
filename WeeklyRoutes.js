const {Router} = require('express')
const { getPlan, savePlan, deletePlan, editPlan} = require('./WeeklyController')

const router = Router()

router.get ('/',getPlan)
router.post('/savePlan',savePlan)
router.post('/deletePlan',deletePlan)
router.post('/editPlan',editPlan)

module.exports = router;
