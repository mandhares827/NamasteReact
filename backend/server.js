const express = require('express');
const app = express();
const Product = require('./models/productModel')

const mongoose = require('mongoose');
app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect('mongodb+srv://mandhares827:qLII9Jn10PKEKXSz@cluster0.2sjsaxl.mongodb.net/node-api?retryWrites=true&w=majority').then(() => {
    console.log("connected to mongoDB")
    app.listen(3000, ()=> {
        console.log("Node api is running");
    })
}).catch((error) => {
    console.error(error);
})

app.get('/', (req, res) => {
    res.send('Helllo Node API');
})

app.post('/product', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json({product});

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.get('/product', async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.get('/product/:id', async (req, res) =>
{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put('/product/:id', async (req, res) =>
{
    try {
        
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: `Cannot find product with id ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.delete('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `Cannot find product with id ${id}`})
        }
        res.status(200).json(id);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
   

})

