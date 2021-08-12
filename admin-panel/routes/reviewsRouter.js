// router api zaproslarni boshqarish
// obj from basic packages ...
const { Router } = require('express');
// we can get obj from the controller file to use it ...
const crudController = require('../controllers/reviews');

const router = Router();

router.get('/api/readAll', crudController.readAllReview);
router.get('/api/readId/:id', crudController.readReviewsId);
router.post('/api/create' ,crudController.addedReview);
router.put('/api/update/:id', crudController.updateReview);
router.delete('/api/delete/:id', crudController.deleteReview);

module.exports = router;
