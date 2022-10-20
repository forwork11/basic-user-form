const express = require("express");
const API = require("../constants/API");
const controller = require('../controllers/UserController');
const router = express.Router();

router.post(API.CREATE, controller.post);

module.exports = router;