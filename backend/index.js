import mongodb  from "mongodb";
import app from "./server";
import dotenv from 'dotenv';


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