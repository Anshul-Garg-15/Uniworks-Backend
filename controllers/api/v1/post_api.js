
const Post = require('../../../model/post');
const User = require('../../../model/user');

module.exports.create_post = function(req,res){
    

    try {
      let userName = req.params.username;

    User.find(userName,function(err,user){

        if(err){
            console.log("Error in finding user",err);
            return;
        }
        Post.create({
            content: req.body.content,
            imageUrl: req.body.imageUrl,
        },function(err,post){
            if(err){
                console.log("Error in creating post",err);
                return;
            }
            user.post.push(post);
            user.save();
            return res.json(201, {
                data:
                {
                    post: post
                },
                message: "Post created"
            });
        });
    
    

    })

    


    } catch (err) {
        console.log('eer',err);
        return res.json(400,{
            message: "Failure"
        })       
    }
    
}


module.exports.getPost = function(req,res){
    try {
        
        Post.find({username:req.params.username},function(err,post){
            if(err){
                console.log("Error in finding post",err);
                return;
            }
            return res.json(201 , {
                message: "User Posts",
                post:post
            })
        })
    } catch (error) {
        return res.json(404,{
            message: "Failure"
        })       
        
    }
}

