const{body,validationResult}=require('express-validator');

exports.registerValidation=[
    body('email','please enter a valid email').isEmail(),
    body('password',"password must contain at least 6 charachters").isLength({min:6})]
    
    exports.validation=(req,res,next)=>{
        const errors =validationResult(req);
        if ( !errors.isEmpty()){
            return res.status(404).json({errors:errors.array()})
        }
    next()
    }