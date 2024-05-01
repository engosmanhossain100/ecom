const emailValidation = require("../Validations/emailValidation");
const User = require("../model/userModel");
const bcrypt = require('bcrypt');


let loginController = async (req,res) =>{
    
    const { email, password } = req.body;

    let findUser = await User.findOne({ email: email});

    if (!emailValidation(email)) {
        return res.status(401).json({ 
          message : `Invalid Email`
      })
      }
      
       if(password.length < 6 || password.length > 10) {
       return res.status(401).json({
        message : `Password must be between 6 and 10 characters`
       })
      }

    if(findUser){
        bcrypt.compare(password, findUser.password, function(err, result) {
            if (result) {
                return res.status(200).json({
                    message : `Login Successfully`
                })
            } else {
                return res.status(401).json({
                    message : `Invalid Email & password`
                })
            }
        });
    }else{
        return res.status(401).json({
            message : `Invalid Email & password`
        })
    }
    }

module.exports = loginController;