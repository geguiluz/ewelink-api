const express = require('express');
// Ewelink
const ewelink = require('ewelink-api');

module.exports = getDevices = async connection => {
  /* get all devices */
  var device = await connection.getDevices();
  console.log(device);
  return device;
};
