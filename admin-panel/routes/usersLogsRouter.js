// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/usersLogs');

const router = Router();

router.get('/api/readAll', crudController.readAllLog);
router.get('/api/readId/:id', crudController.readLogId);
router.post('/api/create' ,crudController.addedLog);
router.put('/api/update/:id', crudController.updateLogId);
router.delete('/api/delete/:id', crudController.deleteLogId);

module.exports = router;