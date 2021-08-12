// controller file...
const {  deleteLog,
 updateLog,
 added,
 readLogId,
 readLogs } = require('../models/UserLog');
const joi = require('joi');

class crudDbController {

 // Api con to bring all categories ...
 async readAllLog(req, res) {
  try {
   const resultDb = await readLogs();
   if (resultDb.length == 0)
    res.status(404).json({ result: 'error', data: 'Not found data' });
   else
    res.status(200).json({ result: 'ok', data: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Find category by id ...
 async readLogId(req, res) {
  try {
   const resultDb = await readLogId(req.params.id);
   if (resultDb.length == 0)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' });
   else
    res.status(200).json({ header: "ok", result: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Add a reference ...
 async addedLog(req, res) {
  try {
   if (typeof(req.body.action_id) != 'number') {
    return res.status(400).json('Login validator error:' + error);
   } else {
    await added(req.body);
    res.status(200).json({ result: 'ok', data: 'data posted' });
   }
  } catch (ex) {
   console.log('Data placement error:' + ex);
  }
 }
 // Update ID card ...
 async updateLogId(req, res) {
  try {
   const resultDb = await  updateLog(req.params.id, req.body);
   if (!resultDb)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' + resultDb });
   else
    res.status(200).json({ header: "ok", result: 'The operation was carried out successfully' });
  } catch (ex) {
   res.status(400).json('Error updating data' + ex);
  }
 }
 // Delete ID card.
 async deleteLogId(req, res) {
  try {
   const resultDb = await deleteLog(req.params.id);
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