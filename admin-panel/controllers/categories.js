// controller file...
const { deleteCategory,
 updateCategory,
 added,
 readCatigoryId,
 readCatigories } = require('../models/Category');
const joi = require('joi');

class crudDbController {

 // Api con to bring all categories ...
 async readAllCatigories(req, res) {
  try {
   const resultDb = await readCatigories();
   if (resultDb.length == 0)
    res.status(404).json({ result: 'error', data: 'Not found data' });
   else
    res.status(200).json({ result: 'ok', data: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Find category by id ...
 async readCatigoriesId(req, res) {
  try {
   const resultDb = await readCatigoryId(req.params.id);
   if (resultDb.length == 0)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' });
   else
    res.status(200).json({ header: "ok", result: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Add a reference ...
 async addedCategory(req, res) {
  try {
   let objreq = {
    title_uz: req.body.title_uz,
    title_ru: req.body.title_ru
   };
   const { error } = validation(objreq);
   if (error) {
    return res.status(400).json('Login validator error:' + error);
   } else {
    const resultDb = await added(req.body);
    res.status(200).json({ result: 'ok', data: 'data posted' });
   }
  } catch (ex) {
   console.log('Data placement error:' + ex);
  }
  function validation(bodM) {
   const validatSchema = {
    title_uz: joi.string().required(),
    title_ru: joi.string().required()
   };
   return joi.validate(bodM, validatSchema);
  }
 }
 // Update ID card ...
 async updateCategoryId(req, res) {
  try {
   const resultDb = await updateCategory(req.params.id, req.body);
   if (!resultDb)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' + resultDb });
   else
    res.status(200).json({ header: "ok", result: 'The operation was carried out successfully' });
  } catch (ex) {
   res.status(400).json('Error updating data' + ex);
  }
 }
 // Delete ID card.
 async deleteCategoryId(req, res) {
  try {
   const resultDb = await deleteCategory(req.params.id);
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