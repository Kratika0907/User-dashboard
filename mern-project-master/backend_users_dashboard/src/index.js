
const app = require('./config.js/express.config');


const port = process.env.PORT;
const env = process.env.NODE_ENV;

// listen to requests
app.listen(port, (err) => {
	if (err) {
		console.log("express starting error")
		console.log('server failed to start', err);
	}
	console.log(`server started [env, port] = [${env}, ${port}]`);
});

module.exports = app;