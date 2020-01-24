const express = require('express');
const router = express.Router();
// Ewelink
const ewelink = require('ewelink-api');

const getDevices = require('../controller/getDevices');

// @route     PUT api/toggleDevice
// @desc      Toggles devices
// @access    Public

router.put('/toggleDevice/:deviceId', async (req, res) => {
  try {
    // Since we're using the auth middleware, we get access to the user
    // console.log(req.user);
    const connection = new ewelink({
      email: 'agcing@hotmail.com',
      password: 'agomez90',
      region: 'us',
    });
    const deviceStatus = await connection.toggleDevice(req.params.deviceId);
    console.log(deviceStatus);
    res.json(deviceStatus);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route     GET api/toggleDevice
// @desc      Toggles devices
// @access    Public

router.get('/getDevices', async (req, res) => {
  try {
    // Since we're using the auth middleware, we get access to the user
    // console.log(req.user);
    const connection = new ewelink({
      email: 'agcing@hotmail.com',
      password: 'agomez90',
      region: 'us',
    });
    device = await getDevices(connection);
    console.log(device);
    res.json(device);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
