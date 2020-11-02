const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type:String,
        required: true,
        unique:true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},{
    timestamps:true
});



const User = mongoose.model('User' , userSchema);

module.exports = User;

