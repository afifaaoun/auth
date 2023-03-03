const ConnectDb= require('./config/ConnexionDb');

const express=require('express');
const userRouter= require('./routes/userRoute');
const app= express();
const port= 5006;
const cors=require('cors');
ConnectDb();
app.use(express.json());
app.use(cors(
{    
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true
}
));

app.use('/user',userRouter);

app.listen(port,(err)=>{
    err?
    console.err('err')
    :
    console.log('server running in port',port);
})



//installation pour l'authetification
// npm i bcrypt
// npm i express-validator
// npm jsonwebtoken