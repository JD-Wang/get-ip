

const Router = require('koa-router')
const router = Router()

router.get('/change', async ( ctx )=>{
    const { 'x-forwarded-for': id } = ctx.request.headers
    console.log('bbbbbbb', id, new Date())
    // ctx.body = {
    //     success: true,
    //     data: id
    // }
    ctx.body = id || ''
})
 
module.exports = router