

const Router = require('koa-router')
const router = Router()
 
/**
 * 获取用户当前环境下的公网ip
 */
router.get('/', async ( ctx )=>{
    const { 'x-forwarded-for': id } = ctx.request.headers
    // ctx.body = {
    //     success: true,
    //     data: id
    // }
    ctx.body = id || ''
})
 
module.exports = router