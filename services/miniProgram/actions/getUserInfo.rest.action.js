const _ = require("lodash");

const { MoleculerError } = require("moleculer").Errors;
const JsonWebToken = require("jsonwebtoken");

module.exports = async function (ctx) {
	try {
		if (_.get(ctx, "meta.auth.credentials.id", null) === null) {
			return {
				code: 1001,
				message: "Không tồn tại id",
			};
		}

		//console.log("ctx.meta.auth.data", ctx.meta.auth.data);

		let userInfo = await this.broker.call(
			"v1.MiniProgramUserModel.findOne",
			[
				{
					id: ctx.meta.auth.credentials.id,
				},
				"-password",
			]
		);

		if (_.get(userInfo, "id", null) === null) {
			return {
				code: 1001,
				message: "Lấy thông tin thất bại",
			};
		}

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
