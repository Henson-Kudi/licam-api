require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Local Imports
const plans = require('./routers/plans/plan')
const products = require('./routers/products/products')

const app = express()

mongoose.connect(process.env.DB_URL, ()=>{
    console.log('Database connection successful');
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Origin, Content-Type, auth-token, Authorization, Accept,");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
})

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.json());

app.use('/plans', plans)

app.use('/products', products)

let port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log('App listening on port 5000');
})
