const express = require('express');
const router = express.Router();
// Ewelink
const ewelink = require('ewelink-api');

// @route     PUT api/deviceUsage
// @desc      Gets device usage
// @access    Public

router.put('/:deviceId', async (req, res) => {
  try {
    // Since we're using the auth middleware, we get access to the user
    // console.log(req.user);
    const connection = new ewelink({
      email: 'agcing@hotmail.com',
      password: 'agomez90',
      region: 'us',
    });
    const usage = await connection.getDevicePowerUsage(req.params.deviceId);
    console.log(usage);
    res.json(usage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
