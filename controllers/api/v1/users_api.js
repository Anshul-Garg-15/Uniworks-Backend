const User = require('../../../model/user');


module.exports.createUser = function(req,res){

    try {
    
        User.create(
            {
                username: req.body.username,
            },
            function(err , user){
                if(err){
                    console.log('Error in creating the user' , err);
                    return;
                }
    
                return res.json(201, {
                    data: {
                        user: user
                    },
                    message: " User created successfully"
                });
            }
        );
    } catch (err) {

        return res.json(400,{
            message: "Failure! Because you have entered incorrect option or you have omitted to fill complete info"
        });
        
    }
    
}



module.exports.getUser = function(req,res){
    try {
        
        User.findOne({username:req.params.username},function(err,user){
            if(err){
                console.log("Error in finding user",err);
                return;
            }
            return res.json(201 , {
                message: "User Profile",
                user:user
            })
        })
    } catch (error) {
        return res.json(404,{
            message: "Failure"
        })       
        
    }
}