// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readBotUsers() {
 try {
  return await knex.select('*').from('tb_bot_users');
 } catch (ex) {
  console.log('error when calling select...');
 }
}
// Read data from id database ...
async function readBotUserId(chatId) {
 try {
  return await knex('tb_bot_users').where('chat_id', chatId);
 } catch (ex) {
  console.log('error when calling select is ID...');
 }
}
// Add users to the database
async function added(reqBody) {
 try {
  return await knex('tb_bot_users').insert({
   first_name: reqBody.first_name,
   last_name: reqBody.last_name,
   username: reqBody.username,
   phone_number: reqBody.phone_number
  });
 } catch (ex) {
  console.log('Error adding data...');
 }
}
// Update database information by id ...
async function updateBotUser(chatId, reqBody) {
 try {
  return await knex('tb_bot_users')
   .where('chat_id', chatId)
   .update({
    first_name: reqBody.first_name,
    last_name: reqBody.last_name,
    username: reqBody.username,
    phone_number: reqBody.phone_number,
    step: reqBody.step,
    status: reqBody.status
   });
 } catch (ex) {
  console.log('error in updating data by id...');
 }
}
// Delete database data by id ...
async function deleteBotUser(chatId) {
 try {
  return await knex('tb_bot_users')
   .where('chat_id', chatId)
   .del();
  //In return, the answer 1 is returned if it is done successfully.
 } catch (ex) {
  console.log('error in deleting data by id...');
 }
}
//We export functions ...
module.exports = {
 deleteBotUser,
 updateBotUser,
 added,
 readBotUserId,
 readBotUsers
};