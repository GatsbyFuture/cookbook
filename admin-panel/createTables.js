// create dynamic tables...
const knex = require('./connectDb');

async function createTables() {
  console.log('Started creating tables!');
  try{
    await knex.schema.createTable('tb_bot_users' ,  function(table){
      table.increments('chat_id');
      table.string('lang','3').notNullable().defaultTo('uz');
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.string('phone_number','20');
      table.integer('step').notNullable().defaultTo('1');
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('first_time').notNullable()
      .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
      table.datetime('last_time').notNullable()
      .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
    });
    console.log("`tb_bot_users` table has been created successfully!!!");
  }catch(ex){
    console.log('exception is query... tb_bot_users-->'+ex);
  }
  try{
  await knex.schema.createTable('tb_site_users' ,  function(table){
      table.increments('user_id');
       table.string('lang','3').notNullable().defaultTo('uz');
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.text('password');
      table.tinyint('gender').defaultTo('0');
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('first_time').notNullable()
      .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
      table.datetime('last_time').notNullable()
      .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
    });
    console.log("`tb_site_users` table has been created successfully!!!");
  }catch(ex){
    console.log('exception is query... tb_site_users');
  }
  try{
    await knex.schema.createTable('tb_admin_users' ,  function(table){
      table.increments('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.text('password');
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('first_time').notNullable()
      .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
      table.datetime('last_time').notNullable()
      .defaultTo(knex.fn.now()).collate('utf8_unicode_ci');
    });
    console.log("`tb_admin_users` table has been created successfully!!!");
   }catch(ex){
     console.log('exception is query... tb_admin_users');
   }
   try{
    await knex.schema.createTable('tb_categories' , function(table){
      table.increments('chat_id');
      table.string('title_uz','300');
      table.string('title_ru','300');
      table.tinyint('status').notNullable().defaultTo('1');
    });
    console.log("`tb_categories` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query... tb_categories');
   }
   try{
    await knex.schema.createTable('tb_videos' , function(table){
      table.increments('video_id');
      table.string('title_uz','300');
      table.string('title_ru','300');
      table.string('src','500');
      table.text('description_uz');
      table.text('description_ru');
      table.integer('chat_id').notNullable();
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('created_at').notNullable().defaultTo(knex.fn.now())
      .collate('utf8_unicode_ci');
      table.datetime('updated_at').notNullable().defaultTo(knex.fn.now())
      .collate('utf8_unicode_ci');
    });
    console.log("`tb_videos` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query...tb_videos'+ex);
   }
   try{
    await knex.schema.createTable('tb_favourite_videos' , function(table){
      table.increments('id');
      table.bigInteger('chat_id');
      table.bigInteger('site_id');
      table.integer('video_id');
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('created_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
      table.datetime('updated_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
    });
    console.log("`tb_favourite_videos` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query...tb_favourite_videos'+ex);
   }
   try{
    await knex.schema.createTable('tb_recent_videos' , function(table){
      table.increments('id');
      table.bigInteger('chat_id');
      table.bigInteger('site_id');
      table.integer('video_id');
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('created_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
      table.datetime('updated_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
    });
    console.log("`tb_recent_videos` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query...tb_recent_videos'+ex);
   }
   try{
    await knex.schema.createTable('tb_reviews' , function(table){
      table.increments('review_id');
      table.bigInteger('chat_id');
      table.bigInteger('site_id');
      table.text('review_text');
      table.tinyint('status').notNullable().defaultTo('1');
      table.datetime('created_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
      table.datetime('updated_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
    });
    console.log("`tb_reviews` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query...tb_reviews'+ex);
   }
   try{
    await knex.schema.createTable('tb_actions' , function(table){
      table.increments('action_id');
      table.string('title_uz');
      table.string('title_ru');
    });
    console.log("`tb_actions` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query...tb_actions');
   }
   try{
    await knex.schema.createTable('tb_users_logs' , function(table){
      table.increments('log_id');
      table.integer('action_id').notNullable();
      table.datetime('created_at').notNullable().defaultTo(knex.fn.now())
        .collate('utf8_unicode_ci');
    });
    console.log("`tb_users_logs` table has been created successfully!!!");
   }catch(ex){
    console.log('exception is query...tb_users_logs'+ex);
   }
   console.log("Finished creating tables!");
  process.exit(0);
}
createTables();
