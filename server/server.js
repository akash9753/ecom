const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const jwt = require('jsonwebtoken')


//connect to the db
mongoose.connect(config.dbConnection)

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())

app.use((request, response, next)=>{
    if(
        (request.url == '/admin/signup')||
        (request.url == '/admin/signin')
    ){
        next()
    }else{
        try{
        const token = request.headers['token']
        console.log(`token: ${token}`)
        if(!token){
            response.send(utils.createResult('unauthorized not token'))
            return
        }
        console.log('checking token...')
        const payload = jwt.verify(token, config.secret)
        console.log(`payload: ${payload}`)
        request.userId = payload.userid
        next()
    }catch (ex){

        response.send(utils.createResult('unauthorized wrong token'))
        console.log('indise catch block')
    }
}
})


//routers
const routerUsers = require('./routes/users')
const routerProducts = require('./routes/products')
const routerOrders = require('./routes/orders')
const routerAdmin = require('./routes/admins')
const routerCategory = require('./routes/categories')

const utils = require('./utils')

app.use('/user',routerUsers)
app.use('/product',routerProducts)
app.use('./order',routerOrders)
app.use('/admin', routerAdmin)
app.use('/category', routerCategory)


app.get('/', (request, response) => {
    response.send('welcome to the admin pannel web apis')
})

app.listen(4000, '0.0.0.0', () =>{
    console.log('server started on port 4000')
})