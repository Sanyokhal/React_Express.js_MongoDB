const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Operation = require('./models/operation.model.js')
const e = require("express");
const port = 5050
app.use(express.json())
app.get('/', (req, res) => {
    res.json(
        {
            status: "Everything is fine"
        }
    )
})
app.get('/operations', (req, res) => {
    let operations = [];
    res.json({
        items: operations
    })
})
app.get('/statistics', (req, res) => {
    let statistics = [];
    res.json({
        items: statistics
    })
})
app.post('/api/operations', async (req, res) => {
    try {
        console.log(req.body)
        const operation = await Operation.create(req.body)
        res.status(200).json({
            result: true,
            item: operation
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.listen(port, () => {
    console.log(`Port ${port} - ready`)
})
mongoose.connect('mongodb://localhost:27017/react-test')
    .then(() => {
        app.listen(port, () => {
            console.log(`Port ${port} - ready`)
        })
    })