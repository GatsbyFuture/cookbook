// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/actions');

const router = Router();

router.get('/api/readAll', crudController.readAllActions);
router.get('/api/readId/:id', crudController.readActionsId);
router.post('/api/create' ,crudController.addedActon);
router.put('/api/update/:id', crudController.updateActionId);
router.delete('/api/delete/:id', crudController.deleteActionId);

module.exports = router;
