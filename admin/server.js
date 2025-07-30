const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')

mongoose.connect('mongodb+srv://golu:golu1234@cluster0.i7alpbh.mongodb.net/')
.then(()=>{
    console.log("MongoDb connected")
}).catch((error)=>{
    console.log("Not connected",error)
});

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin:'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders: [
            "Content-type",
            'authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log("server code is running"));

