const express = require('express');

const app = express();

// Defining our Routes
app.use('/api/device', require('./routes/device'));
app.use('/api/deviceUsage', require('./routes/deviceUsage'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Ewelink
const ewelink = require('ewelink-api');
