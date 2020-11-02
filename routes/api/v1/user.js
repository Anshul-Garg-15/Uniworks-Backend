const express = require('express');

const router = express.Router();
const userApi = require('../../../controllers/api/v1/users_api')

router.post('/create-user', userApi.createUser);
router.get('/get-user/:username' , userApi.getUser);


module.exports = router;