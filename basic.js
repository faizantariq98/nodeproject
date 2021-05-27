const express=require('express');
const app= express();

const port=30001
const connectDB=require('./config/db')
connectDB();
const userRoute=require('./router/userRoutes')
const postRoute=require('./router/postRouter')
const authRouter=require('./router/authRouter') 
const countriesRouter=require('./router/countriesRouter') 
const errorHandler = require('./middleware/error')
const cors = require('cors')
const morgan= require('morgan')
app.use(express.json());
app.use(cors());
app.use(morgan())
app.use('/users', userRoute) ;
app.use('/posts',postRoute);
app.use('/auth',authRouter);
app.use('/countries',countriesRouter)

app.get('/',(req,res,next)=>{
    res.send("first page");
});

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})