const _ = require("lodash");

const { MoleculerError } = require("moleculer").Errors;
const JsonWebToken = require("jsonwebtoken");

module.exports = async function (ctx) {
	try {
		const userInfo = { ...ctx.meta.auth?.data };
		//console.log("ctx.meta.auth.data", ctx.meta.auth.data);

		return {
			code: 1000,
			message: "Lấy thông tin người dùng thành công",
			userInfo,
		};
	} catch (err) {
		if (err.name === "MoleculerError") throw err;
		throw new MoleculerError(`[MiniProgram1] Add: ${err.message}`);
	}
};
