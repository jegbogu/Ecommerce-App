require('dotenv').config();

const productData = require('./data/products')
const connectDB = require('./config/db');
const Product = require('./models/Product.js')

connectDB();
const importData = async ()=>{
    try {
    await Product.deleteMany({})
    await Product.insertMany(productData)

    console.log('Data Import success')
    } catch (error) {
        console.error('error with importing data')
        process.exit(1)
    }
};
importData()