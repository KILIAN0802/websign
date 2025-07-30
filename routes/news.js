const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController')

// newsController.index
// /news
router.get('/storedMe', newsController.storedMe);
router.get('/trash', newsController.trash);
router.post('/handle-form-actions', newsController.handleFormActions);
router.get('/:id/edit', newsController.edit);
router.put('/:id', newsController.update);
router.patch('/:id/restore', newsController.restore);
router.delete('/:id', newsController.destroy);
router.delete('/:id/force', newsController.forceDestroy);
router.post('/store', newsController.store);
router.get('/', newsController.index);

module.exports = router;