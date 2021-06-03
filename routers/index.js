
// https://github.com/ZijianHe/koa-router#readme
const router = require('koa-router')()

const getIp = require('../controllers/getIp')
const changeIp = require('../controllers/changeIp')

router.use('/', getIp.routes(), getIp.allowedMethods())
router.use('/api', changeIp.routes(), changeIp.allowedMethods())

module.exports = router