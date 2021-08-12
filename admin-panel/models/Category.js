// we get the main obj ...
const knex = require('../connectDb');
// To read data from the database ...
async function readCatigories() {
  try {
    return await knex.select('*').from('tb_categories');
  } catch (ex) {
    console.log('error when calling select...');
  }
}
// Read data from id database ...
async function readCatigoryId(chatId) {
  try {
    return await knex('tb_categories').where('chat_id', chatId);
  } catch (ex) {
    console.log('error when calling select is ID...');
  }
}
// Add users to the database
async function added(reqBody) {
  try {
    return await knex('tb_categories').insert({
      title_uz: reqBody.title_uz,
      title_ru: reqBody.title_ru,
      status: reqBody.status
    });
  } catch (ex) {
    console.log('Error adding data...');
  }
}
// Update database information by id ...
async function updateCategory(chatId, reqBody) {
  try {
    return await knex('tb_categories')
      .where('chat_id', chatId)
      .update({
        title_uz: reqBody.title_uz,
        title_ru: reqBody.title_ru,
        status: reqBody.status
      });
  } catch (ex) {
    console.log('error in updating data by id...');
  }
}
// Delete database data by id ...
async function deleteCategory(chatId) {
  try {
    return await knex('tb_categories')
      .where('chat_id', chatId)
      .del();
    //In return, the answer 1 is returned if it is done successfully.
  } catch (ex) {
    console.log('error in deleting data by id...');
  }
}
//We export functions ...
module.exports = {
  deleteCategory,
  updateCategory,
  added,
  readCatigoryId,
  readCatigories
};