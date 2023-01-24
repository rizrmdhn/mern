import app from "./server.js";
import mongodb  from "mongodb";
import dotenv from 'dotenv';
import  Router  from "express";


dotenv.config();

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8080;

MongoClient.connect(
    process.env.RESTREVIEWS_DB,{
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse:true
    }
).catch(err => {
    console.error();
})
.then(async client => {
    app.listen(port, () => { 
        console.log(`listening on port ${port}`);
    })
})

