// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readActions() {
 try {
  return await knex.select('*').from('tb_actions');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readActionId(actionId) {
 try {
  return await knex('tb_actions').where('action_id', actionId);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_actions').insert({
   title_uz: reqBody.title_uz,
   title_ru: reqBody.title_ru,
  });
 } catch (ex) {
  console.log('Error adding data...');
 }
}
// Update database information by id ...
async function updateAction(actionId, reqBody) {
 try {
  return await knex('tb_actions')
   .where('action_id', actionId)
   .update({
    title_uz: reqBody.title_uz,
    title_ru: reqBody.title_ru,
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteAction(actionId) {
 try {
  return await knex('tb_actions')
   .where('action_id', actionId)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...');
 }
}
//We export functions ...
module.exports = {
 deleteAction,
 updateAction,
 added,
 readActionId,
 readActions
};