// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readReview() {
 try {
  return await knex.select('*').from('tb_reviews');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readReviewId(id) {
 try {
  return await knex('tb_reviews').where('review_id', id);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_reviews').insert({
   chat_id: reqBody.chat_id,
   site_id: reqBody.site_id,
   review_text: reqBody.review_text,
  });
 } catch (ex) {
  console.log('Error adding data...');
 }
}
// Update database information by id ...
async function updateReview(id, reqBody) {
 try {
  return await knex('tb_reviews')
   .where('review_id', id)
   .update({
    chat_id: reqBody.chat_id,
    site_id: reqBody.site_id,
    review_text: reqBody.review_text,
    status: reqBody.status
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteReview(id) {
 try {
  return await knex('tb_reviews')
   .where('review_id', id)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...');
 }
}
//We export functions ...
module.exports = {
 deleteReview,
 updateReview,
 added,
 readReviewId,
 readReview
};