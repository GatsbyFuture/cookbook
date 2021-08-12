// controller file...
const {  deleteReview,
 updateReview,
 added,
 readReviewId,
 readReview } = require('../models/Review');


class crudDbController {

 // Api con to bring all categories ...
 async readAllReview(req, res) {
  try {
   const resultDb = await readReview();
   if (resultDb.length == 0)
    res.status(404).json({ result: 'error', data: 'Not found data' });
   else
    res.status(200).json({ result: 'ok', data: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Find category by id ...
 async readReviewsId(req, res) {
  try {
   const resultDb = await readReviewId(req.params.id);
   if (resultDb.length == 0)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' });
   else
    res.status(200).json({ header: "ok", result: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Add a reference ...
 async addedReview(req, res) {
  let count = 0;
  try {
   const err = validation(req.body);
   if (err != 2 && typeof(req.body.review_text) != 'string') {
    return res.status(400).json({ result: 'error', data: 'variable type error:' + err });
   } else {
    await added(req.body);
    res.status(200).json({ result: 'ok', data: 'data posted' });
   }
  } catch (ex) {
   console.log('Data placement error:' + ex);
  }
  function validation(bodM) {
   if(typeof(bodM.chat_id) == 'number')
   count++;
   if(typeof(bodM.site_id) == 'number')
   count++;
   return count;
  }
 }
 // Update ID card ...
 async updateReview(req, res) {
  try {
   const resultDb = await updateReview(req.params.id, req.body);
   if (!resultDb)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' + resultDb });
   else
    res.status(200).json({ header: "ok", result: 'The operation was carried out successfully' });
  } catch (ex) {
   res.status(400).json('Error updating data' + ex);
  }
 }
 // Delete ID card.
 async deleteReview(req, res) {
  try {
   const resultDb = await deleteReview(req.params.id);
   if (!resultDb)
    res.status(404).json({ header: "error", result: "Not Found" });
   else
    res.status(200).json({ header: "ok", result: "Data deleted" });
  } catch (ex) {
   res.status(400).json('Error deleting data' + ex);
  }
 }
}
module.exports = new crudDbController();