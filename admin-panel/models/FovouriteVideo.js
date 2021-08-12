// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readFavourites() {
 try {
  return await knex.select('*').from('tb_favourite_videos');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readFavouriteId(id) {
 try {
  return await knex('tb_favourite_videos').where('id', id);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_favourite_videos').insert({
   chat_id: reqBody.chat_id,
   site_id: reqBody.site_id,
   video_id: reqBody.video_id,
  });
 } catch (ex) {
  console.log('Error adding data...');
 }
}
// Update database information by id ...
async function updateFavourite(id, reqBody) {
 try {
  return await knex('tb_favourite_videos')
   .where('id', id)
   .update({
    chat_id: reqBody.chat_id,
    site_id: reqBody.site_id,
    video_id: reqBody.video_id,
    status: reqBody.status
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteFavouriter(id) {
 try {
  return await knex('tb_favourite_videos')
   .where('id', id)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...');
 }
}
//We export functions ...
module.exports = {
 deleteFavouriter,
 updateFavourite,
 added,
 readFavouriteId,
 readFavourites
};