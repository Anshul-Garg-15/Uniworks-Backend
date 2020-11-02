const express = require('express');

const router = express.Router();

const Api = require('../../../controllers/api/v1/post_api');

router.get('/all-post/:username' , Api.getPost);

router.post('/create-post/:username' ,Api.create_post);

module.exports = router;