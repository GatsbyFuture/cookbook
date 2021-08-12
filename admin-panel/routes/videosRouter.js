// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/videos');

const router = Router();

router.get('/api/readAll', crudController.readAllVideos);
router.get('/api/readId/:id', crudController.readVideosId);
router.post('/api/create' ,crudController.addedVideo);
router.put('/api/update/:id', crudController.updateVideoId);
router.delete('/api/delete/:id', crudController.deleteVideoId);

module.exports = router;