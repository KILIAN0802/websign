const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/ManageController');

// siteController.index

router.get('/:slug', siteController.manage);
router.get('/manage', siteController.manage);
router.get('/', siteController.index);
module.exports = router;