// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/adminUser');

const router = Router();

router.get('/api/readAll', crudController.readAllAdminUsers);
router.get('/api/readId/:id', crudController.readAdminUsersId);
router.post('/api/create' ,crudController.addedAdminUser);
router.put('/api/update/:id', crudController.updateAdminUserId);
router.delete('/api/delete/:id', crudController.deleteAdminUserId);

module.exports = router;
