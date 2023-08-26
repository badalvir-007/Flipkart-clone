import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import DefaultData from './default.js';
import Router from './routes/route.js';
import Connection from './database/db.js';


const app = express();

dotenv.config();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(204); // Respond with No Content for OPTIONS requests
    } else {
        next(); // Continue to the next middleware/route handler
    }
});


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/' , Router);




const  PORT = 8080;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD =process.env.DB_PASSWORD;

Connection(USERNAME ,PASSWORD);
app.listen(PORT , ()=> console.log(`server is running succesfully on port ${PORT} HELLO`));
DefaultData();