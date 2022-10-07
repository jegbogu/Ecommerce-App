require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const productsRoutes = require('./routes/productRoutes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(res,req)=>{
    res.json({message:'API running...'})
    
})

app.use('/api/products',productsRoutes)


connectDB()
const PORT = process.env.PORT || 5000

app.listen(PORT ,()=>{
    console.log(`listening to port ${PORT}`)
})