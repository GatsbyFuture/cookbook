// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/recentVideos');

const router = Router();

router.get('/api/readAll', crudController.readAllRecent);
router.get('/api/readId/:id', crudController.readRecentId);
router.post('/api/create' ,crudController.addedRecent);
router.put('/api/update/:id', crudController.updateRecent);
router.delete('/api/delete/:id', crudController.deleteRecent);

module.exports = router;
