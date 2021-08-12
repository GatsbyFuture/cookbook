// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readVideos() {
 try {
  return await knex.select('*').from('tb_videos');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readVideoId(id) {
 try {
  return await knex('tb_videos').where('video_id', id);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_videos').insert({
   title_uz: reqBody.title_uz,
   title_ru: reqBody.title_ru,
   src: reqBody.src,
   description_uz: reqBody.description_uz,
   description_ru: reqBody.description_ru,
   chat_id:reqBody.chat_id
  });
 } catch (ex) {
  console.log('Error adding data...'+ex);
 }
}
// Update database information by id ...
async function updateVideo(id, reqBody) {
 try {
  return await knex('tb_videos')
   .where('video_id', id)
   .update({
   title_uz: reqBody.title_uz,
   title_ru: reqBody.title_ru,
   src: reqBody.src,
   description_uz: reqBody.description_uz,
   description_ru: reqBody.description_ru,
   chat_id:reqBody.chat_id,
   status: reqBody.status
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteVideo(id) {
 try {
  return await knex('tb_videos')
   .where('video_id', id)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...'+ex);
 }
}
//We export functions ...
module.exports = {
 deleteVideo,
 updateVideo,
 added,
 readVideoId,
 readVideos
};