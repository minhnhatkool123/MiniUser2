const _ = require("lodash");

const { MoleculerError } = require("moleculer").Errors;
const JsonWebToken = require("jsonwebtoken");
//const MiniProgramConstant = require('../constants/MiniProgramInfoConstant');

module.exports = async function (ctx) {
	try {
		const payload = ctx.service.name.includes(".graph")
			? ctx.params.input
			: ctx.params.body;
		const obj = {};

		if (!_.isNil(_.get(payload, "name", null))) {
			obj.name = payload.name;
		}
		if (!_.isNil(_.get(payload, "phone", null))) {
			obj.phone = payload.phone;
		}
		if (!_.isNil(_.get(payload, "gender", null))) {
			obj.gender = payload.gender;
		}
		if (!_.isNil(_.get(payload, "avatar", null))) {
			obj.avatar = payload.avatar;
		}

		if (_.get(ctx, "meta.auth.credentials.userId", null) === null) {
			return {
				code: 1001,
				message: "Không tồn tại userId",
			};
		}

		let userInfo = await this.broker.call(
			"v1.MiniProgramUserModel.findOneAndUpdate",
			[
				{
					id: ctx.meta.auth.credentials.userId,
				},
				obj,
			]
		);

		if (_.get(userInfo, "id", null) === null) {
			return {
				code: 1001,
				message: "Cập nhập thông tin thất bại",
			};
		}

		return {
			code: 1000,
			message: "Cập nhập thông tin người dùng thành công",
		};
	} catch (err) {
		if (err.name === "MoleculerError") throw err;
		throw new MoleculerError(`[MiniProgram1] Add: ${err.message}`);
	}
};
