// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/users');

const router = Router();

router.get('/api/readAll', crudController.readAllUser);
router.get('/api/readId/:id', crudController.readUserId);
router.post('/api/create' ,crudController.addedUser);
router.put('/api/update/:id', crudController.updateUserId);
router.delete('/api/delete/:id', crudController.deleteUserId);

module.exports = router;
