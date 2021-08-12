// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readAdminUser() {
 try {
  return await knex.select('*').from('tb_admin_users');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readAdminUserId(userId) {
 try {
  return await knex('tb_admin_users').where('user_id', userId);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_admin_users').insert({
   first_name: reqBody.first_name,
   last_name: reqBody.last_name,
   username: reqBody.username,
   password: reqBody.password
  });
 } catch (ex) {
  console.log('Error adding data...');
 }
}
// Update database information by id ...
async function updateAdminUser(userId, reqBody) {
 try {
  return await knex('tb_admin_users')
   .where('user_id', userId)
   .update({
    first_name: reqBody.first_name,
    last_name: reqBody.last_name,
    username: reqBody.username,
    password: reqBody.password,
    status: reqBody.status
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteAdminUser(userId) {
 try {
  return await knex('tb_admin_users')
   .where('user_id', userId)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...');
 }
}
//We export functions ...
module.exports = {
 deleteAdminUser,
 updateAdminUser,
 added,
 readAdminUserId,
 readAdminUser
};