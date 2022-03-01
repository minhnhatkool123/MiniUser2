const _ = require('lodash');

const { MoleculerError } = require('moleculer').Errors;
const JsonWebToken = require('jsonwebtoken');

module.exports = async function (ctx) {
	try {
		const userInfo = { ...ctx.meta.auth.data }
		delete userInfo.password
		//console.log('miniProgramInfo', ctx.meta.auth)

		return {
			code: 1000,
			message: 'Lấy thông tin người dùng thành công',
			userInfo,
		};
	} catch (err) {
		if (err.name === 'MoleculerError') throw err;
		throw new MoleculerError(`[MiniProgram1] Add: ${err.message}`);
	}
};
