const express = require('express');

const app = express();

// Defining our Routes
app.use('/api/device', require('./routes/device'));
app.use('/api/deviceUsage', require('./routes/deviceUsage'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Ewelink
const ewelink = require('ewelink-api');

/* instantiate class */
const connection = new ewelink({
  email: 'agcing@hotmail.com',
  password: 'agomez90',
  region: 'us',
});
// const connection = new ewelink({
//   email: 'memo.eguiluz@gmail.com',
//   password: '*hngmd10A',
//   region: 'us',
// });

var getDevices = async () => {
  /* get all devices */
  var devices = await connection.getDevices();
  console.log(devices);
};
var getRegion = async () => {
  const region = await connection.getRegion();
  console.log('Region', region);
};
var toggleDevice = async () => {
  const status = await connection.toggleDevice('1000bf7236');
  console.log(status);
};

// getDevices();
// getRegion();
// toggleDevice();
