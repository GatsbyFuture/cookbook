// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/fovouriteVideos');

const router = Router();

router.get('/api/readAll', crudController.readAllFovouritesVideo);
router.get('/api/readId/:id', crudController.readFovouritesVideoId);
router.post('/api/create' ,crudController.addedFovouritesVideo);
router.put('/api/update/:id', crudController.updateFovouritesVideoId);
router.delete('/api/delete/:id', crudController.deleteFovouritesVideoId);

module.exports = router;
