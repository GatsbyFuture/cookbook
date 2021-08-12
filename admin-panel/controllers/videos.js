// controller file...
const { deleteVideo,
 updateVideo,
 added,
 readVideoId,
 readVideos } = require('../models/Video');
const joi = require('joi');

class crudDbController {

 // Api con to bring all categories ...
 async readAllVideos(req, res) {
  try {
   const resultDb = await readVideos();
   if (resultDb.length == 0)
    res.status(404).json({ result: 'error', data: 'Not found data' });
   else
    res.status(200).json({ result: 'ok', data: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Find category by id ...
 async readVideosId(req, res) {
  try {
   const resultDb = await readVideoId(req.params.id);
   if (resultDb.length == 0)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' });
   else
    res.status(200).json({ header: "ok", result: resultDb });
  } catch (ex) {
   res.status(500).json('Error reading data' + ex);
  }
 }
 // Add a reference ...
 async addedVideo(req, res) {
  try {
   let objreq = {
    title_uz: req.body.title_uz,
    title_ru: req.body.title_ru,
    src: req.body.src,
    description_uz: req.body.description_uz,
    description_ru: req.body.description_ru,
   };
   const { error } = validation(objreq);
   if (error) {
    return res.status(400).json({ result: 'error', data: 'Login validator error:' + error });
   } else {
    await added(req.body);
    res.status(200).json({ result: 'ok', data: 'data posted' });
   }
  } catch (ex) {
   console.log('Data placement error:' + ex);
  }
  function validation(bodM) {
   const validatSchema = {
    title_uz: joi.string().required(),
    title_ru: joi.string().required(),
    src: joi.string().required(),
    description_uz: joi.string().required(),
    description_ru:joi.string().required()
   };
   return joi.validate(bodM, validatSchema);
  }
 }
 // Update ID card ...
 async updateVideoId(req, res) {
  try {
   const resultDb = await updateVideo(req.params.id, req.body);
   if (!resultDb)
    res.status(404).json({ header: "error", result: 'The card you are looking for is not relevant!' + resultDb });
   else
    res.status(200).json({ header: "ok", result: 'The operation was carried out successfully' });
  } catch (ex) {
   res.status(400).json('Error updating data' + ex);
  }
 }
 // Delete ID card.
 async deleteVideoId(req, res) {
  try {
   const resultDb = await deleteVideo(req.params.id);
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