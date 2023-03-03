const userSchema=require('../model/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

exports.register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const found = await userSchema.findOne({email}) //existance de l'email
        if(found){
            res.status(404).json({msg:'email already exist'})
        }

        const newUser= await new userSchema(req.body); // li fiha name email password
        //partie nst7a9ouha fl cryptageg de password
        const saltRounds=10;
        const salt= bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt);
        newUser.password= hash;
    const payload={id:newUser._id};
    const token = jwt.sign(payload,process.env.Private_key);
    newUser.save();
    res.status(200).json({msg:'user created',newUser,token})
    }
    catch(err){
        res.status(500).json({msg:'cannot create this user'})
        console.log(err);
    }

}

exports.getUser=async(req,res)=>{
try{const users= await userSchema.find()
    res.status(200).json({msg:'list',users})}
catch{
    res.status(500).json({msg:'error to get users'})
}    
}

exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const exist = await userSchema.findOne({email});
        if (!exist){
            res.status(404).json({msg:'this is not the wanted user'})
        }
        //password deja crypt" dc lezem decryptage
        const match= await bcrypt.compare(password,exist.password);  // exist.password lifl req.body
        if(!match){
            return res.status(404).json({msg:'wrong password'})
        }
        const payload= {id: exist._id};
        const token=jwt.sign(payload,process.env.Private_key);
        res.status(200).json({msg:'welcome',token})
    }
    catch{
        res.status(500).json({msg:"you don't have permisson"})
    }
}

