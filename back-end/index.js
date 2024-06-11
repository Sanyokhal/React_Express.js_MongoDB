const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Operation = require('./models/operation.model.js')
require('dotenv').config()
const e = require("express");
const port = process.env.PORT
const mongo_db_url = process.env.MONGODB_URL;
app.use(express.json())
app.get('/', (req, res) => {
    res.json(
        {
            status: "Everything is fine"
        }
    )
})
app.get('/operations', async (req, res) => {
    try {
        let operations = await Operation.find({});
        res.json({
            items: operations
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
app.get('/statistics', (req, res) => {
    let statistics = [];
    res.json({
        items: statistics
    })
})
app.post('/api/operations', async (req, res) => {
    try {
        const operation = await Operation.create(req.body)
        res.status(200).json({
            result: true,
            item: operation
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
mongoose.connect(mongo_db_url)
    .then(() => {
        console.log("DATABASE CONNECTED")
        app.listen(port, () => {
            console.log(`Port ${port} - ready`)
        })
    })