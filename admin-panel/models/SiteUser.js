// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readSiteUsers() {
 try {
  return await knex.select('*').from('tb_site_users');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readSiteUserId(id) {
 try {
  return await knex('tb_site_users').where('user_id', id);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_site_users').insert({
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
async function updateSiteUser(id, reqBody) {
 try {
  return await knex('tb_site_users')
   .where('user_id', id)
   .update({
    first_name: reqBody.first_name,
    last_name: reqBody.last_name,
    username: reqBody.username,
    password: reqBody.password,
    gender: reqBody.gender,
    status:reqBody.status
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteSiteUser(id) {
 try {
  return await knex('tb_site_users')
   .where('user_id', id)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...'+ex);
 }
}
//We export functions ...
module.exports = {
 deleteSiteUser,
 updateSiteUser,
 added,
 readSiteUserId,
 readSiteUsers
};