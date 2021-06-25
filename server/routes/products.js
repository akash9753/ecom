const express = require ('express')
const Product = require('../models/product')
const utils = require('../utils')
console.log('multer')
const multer = require('multer')
const upload = multer({dest: 'images/'})


const router = express.Router()


router.post("/upload-image/:id", upload.single("image"), (request, response)=>{
    console.log('inside post upload ')
    const {id} = request.params
    console.log(`id': ${id}`)
   // response.send({status:"success"})
    Product
    .findOne({_id:id, deleted: false})
    .exec((error,product)=>{
      if(error){
           response.send(utils.createResult(error,null))
        }else if(!product){
           response.send(utils.createResult('product not found',null)) 
        }else{
            
            product.image = request.file.filename
           
            product.save((error, product)=>{
        response.send(utils.createResult(error,product))
   })
    }
 })
})


router.post('/',(request, response)=>{
    const {title , description, category, price} = request.body

    const product = new Product()
    product.title = title
    product.description = description
    product.category = category
    product.price = price
    
    product.save((error, product)=>{
        response.send(utils.createResult(error,product))
    })
})

router.get('/',(request, response)=>{
    Product
    .find({deleted: false},{__v:0,deleted: 0, isActive: 0, createdTimestamp : 0})
    .populate('category', 'title _id' )
    .exec((error, products)=>{
        response.send(utils.createResult(error,products))
})
    
})

router.put('/:id',(request, response)=>{
    const {id} = request.params
    const {title , description, category, price} = request.body
    Product
    .findOne({_id:id, deleted: false})
    .exec((error,product)=>{
        if(error){
            response.send(utils.createResult(error,null))
        }else if(!product){
            response.send(utils.createResult('product not found',null)) 
        }else{
            product.title = title
            product.description = description
            product.category = category
            product.price = price
            product.save((error, product)=>{
        response.send(utils.createResult(error,product))
    })
    }
  })
})

router.delete('/:id',(request, response)=>{
    const {id} = request.params
    
    Product
    .findOne({_id:id})
    .exec((error,product)=>{
        if(error){
            response.send(utils.createResult(error,null))
        }else if(!product){
            response.send(utils.createResult('product not found',null)) 
        }else{
            product.deleted = true
    
            product.save((error, product)=>{
        response.send(utils.createResult(error,product))
    })
    }
  })
})



module.exports = router