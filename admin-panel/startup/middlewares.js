// middleware file...
const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const Category = require('../routes/categories');
const Action = require('../routes/actionsRouter');
const AdminUser = require('../routes/adminUserRouter');
const User = require('../routes/users');
const Favourite = require('../routes/favouriteVideoRouter');
const Recent = require('../routes/recentVideoRouter');
const Review = require('../routes/reviewsRouter');
const SiteUser = require('../routes/siteUserRouter');
const UserLog = require('../routes/usersLogsRouter');
const Video = require('../routes/videosRouter');


module.exports = function (app) {
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static('public'));
 app.use(express.static(path.join(__dirname, 'public')));
 // qaysi muhitda ishlayotganini tekshirish...
 if (app.get('env') == 'development') {
  app.use(morgan('tiny'));
  console.log('development ishlayapti..');
 }
 app.use(helmet());

 app.use('/action', Action);
 app.use('/admin', AdminUser);
 app.use('/user', User);
 app.use('/category', Category);
 app.use('/favourite', Favourite);
 app.use('/recent', Recent);
 app.use('/review', Review );
 app.use('/site', SiteUser );
 app.use('/logs', UserLog );
 app.use('/video', Video );

};