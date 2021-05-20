
// https://github.com/ZijianHe/koa-router#readme
const router = require('koa-router')()

const getIp = require('../controllers/getIp')

router.use('/api', getIp.routes(), getIp.allowedMethods())

module.exports = router