const product = require('../models/Product')

const getProducts = async ( req,res)=>{
    try {
    const products = await product.find({})
    res.json(products)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'internal server error'})
    }
    
}
const getProductsById = async ( req,res)=>{
    try {
        const{id:id} = req.params
    const product = await product.findById({id})
    res.json(product)
        
    } catch (error) {
        console.error(error)
       res.status(500).json({message:'Internal server Error'})
    }
    
}

module.exports = {
    getProducts,
    getProductsById
};