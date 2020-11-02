const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    caption:{
        type: String,
        required: true
    },

  imageUrl:{
      type: String,
      required: true
  },
    //this makes sure no post can be created without its user details
    user:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required:true,
    },

},{
    timestamps: true
});

const Post = mongoose.model('Post' , postSchema);

module.exports = Post;