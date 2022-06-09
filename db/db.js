// const {MongoClient} = require('mongodb');
//const {mongodb} = require('mongodb');
//const connectionString= "mongodb://srv1:27017";
const mongoose=require('mongoose');
const server="localhost:27017";
const database="324102417tamar&miri";
const logger = require('../utils/logger');

//const client = new MongoClient(connectionString);

class dataBase{
    
   
    constructor(){
      logger.info(`init db`); 
      console.log('init db');
      this._connect()
    }  
    
   async _connect(){
      //  const client = new MongoClient(connectionString, {
      //      useNewUrlParser: true,
      //      useUnifiedTopology: true,
      //    });
   
      //  let connected = await client.connect();

      //  this.db = connected.db("324102417tamar&miri");
       
      //  console.log("DB Connected!")
    let c= await mongoose.connect(`mongodb://${server}/${database}`);
    if(c)
        logger.info("DB Connected!");
    else
        logger.error("err connection!"); 
    
   };
   
    
   }
   
   
     module.exports = new dataBase();