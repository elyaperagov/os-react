<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

require('Route.php');
require('Send.php');

Route::add('/', function () {
  echo 'api';
}, 'get');

Route::add('/sendmail', function () {
  Send::sendMail();
}, 'post');

Route::run('/api');
