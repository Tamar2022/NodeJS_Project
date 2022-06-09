const express=require('express' );
const user=require('./routes/user.js');
const category=require('./routes/CategoryRoutes.js');
const product=require('./routes/productRoutes.js');
const order=require('./routes/orderRoutes.js');
const db=require('./db/db.js');
const app=express();
const port=5501;
const logger = require('./utils/logger');



db._connect();

app.use(express.static('static'));
app.use(express.json());


app.use('/api/user',user);
app.use('/api/category',category)
app.use('/api/product',product)
app.use('/api/order',order)
app.listen(port,()=>{
    logger.info(`server up at ${port}`);
})