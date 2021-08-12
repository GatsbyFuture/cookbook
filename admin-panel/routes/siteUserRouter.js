// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/siteUsers');

const router = Router();

router.get('/api/readAll', crudController.readAllSiteUser);
router.get('/api/readId/:id', crudController.readSiteUserId);
router.post('/api/create' ,crudController.addedSiteUser);
router.put('/api/update/:id', crudController.updateSiteUserId);
router.delete('/api/delete/:id', crudController.deleteSiteUserId);

module.exports = router;