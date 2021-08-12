// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/categories');

const router = Router();

router.get('/api/readAll', crudController.readAllCatigories);
router.get('/api/readId/:id', crudController.readCatigoriesId);
router.post('/api/create' ,crudController.addedCategory);
router.put('/api/update/:id', crudController.updateCategoryId);
router.delete('/api/delete/:id', crudController.deleteCategoryId);

module.exports = router;

