// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readLogs() {
 try {
  return await knex.select('*').from('tb_users_logs');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readLogId(id) {
 try {
  return await knex('tb_users_logs').where('log_id', id);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_users_logs').insert({
   action_id:reqBody.action_id
  });
 } catch (ex) {
  console.log('Error adding data...');
 }
}
// Update database information by id ...
async function updateLog(id, reqBody) {
 try {
  return await knex('tb_users_logs')
   .where('log_id', id)
   .update({
    action_id:reqBody.action_id
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteLog(id) {
 try {
  return await knex('tb_users_logs')
   .where('log_id', id)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...'+ex);
 }
}
//We export functions ...
module.exports = {
 deleteLog,
 updateLog,
 added,
 readLogId,
 readLogs
};