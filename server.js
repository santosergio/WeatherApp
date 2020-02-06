const express = require('express')
const app = express()

const router = require('./api/routes');

require('dotenv').config()

global.conf = require('./settings/conf');



app.use('/api', router);

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
	console.log(`App listening on port ${conf.apiPort}!`)
})