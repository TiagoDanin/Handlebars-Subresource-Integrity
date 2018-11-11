const crypto = require('crypto')
module.exports = (source) => {
	return 'sha384-' + crypto
		.createHash('sha384')
		.update(source, 'binary')
		.digest('base64')
}
