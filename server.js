import express  from "express";
import Connection from "./database/db.js";
import Defaultdata from "./default.js";
import dotenv from 'dotenv';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";
import {v4 as uuid} from "uuid"




const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router)
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI   || `mongodb://${USERNAME}:${PASSWORD}@ac-jghc8qy-shard-00-00.qs8nk2q.mongodb.net:27017,ac-jghc8qy-shard-00-01.qs8nk2q.mongodb.net:27017,ac-jghc8qy-shard-00-02.qs8nk2q.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-los6oz-shard-0&authSource=admin&retryWrites=true&w=majority`;



Connection(URL)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
Defaultdata();



export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'viveksnh933@gmail.com'
paytmParams['MOBILE_NO'] = '9540581437'