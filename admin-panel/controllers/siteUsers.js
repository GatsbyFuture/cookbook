// controller file...
const { deleteSiteUser,
 updateSiteUser,
 added,
 readSiteUserId,
 readSiteUsers } = require('../models/SiteUser');
const joi = require('joi');

class crudDbController {

 // Api con to bring all categories ...
 async readAllSiteUser(req, res) {
  try {
   const resultDb = await readSiteUsers();
   if (resultDb.length == 0)
    res.status(404).json({ result: 'error', data: 'Not found data' });
   else
    res.status(200).json({ result: 'ok', data: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Find category by id ...
 async readSiteUserId(req, res) {
  try {
   const resultDb = await readSiteUserId(req.params.id);
   if (resultDb.length == 0)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' });
   else
    res.status(200).json({ header: "ok", result: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Add a reference ...
 async addedSiteUser(req, res) {
  try {
   let objreq = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password
   };
   const { error } = validation(objreq);
   if (error) {
    return res.status(400).json('Login validator error:' + error);
   } else {
    await added(req.body);
    res.status(200).json({ result: 'ok', data: 'data posted' });
   }
  } catch (ex) {
   console.log('Data placement error:' + ex);
  }
  function validation(bodM) {
   const validatSchema = {
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    username:joi.string().required(),
    password:joi.string().required()
   };
   return joi.validate(bodM, validatSchema);
  }
 }
 // Update ID card ...
 async updateSiteUserId(req, res) {
  try {
   const resultDb = await updateSiteUser(req.params.id, req.body);
   if (!resultDb)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' + resultDb });
   else
    res.status(200).json({ header: "ok", result: 'The operation was carried out successfully' });
  } catch (ex) {
   res.status(400).json('Error updating data' + ex);
  }
 }
 // Delete ID card.
 async deleteSiteUserId(req, res) {
  try {
   const resultDb = await deleteSiteUser(req.params.id);
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