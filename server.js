const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);



require('dotenv').config();
const app = require('./src/app');
const connectDb = require('./src/db/db');


connectDb();

app.listen(3000, () =>{
    console.log("server is running on port 3000");
})