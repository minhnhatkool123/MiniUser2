const _ = require("lodash");

const MiniProgramInfoConstant = require("./constants/MiniProgramInfoConstant");
const MeAPI = require("../../serviceDependencies/MEAPI");

module.exports = {
	name: "MiniProgram1.rest",

	version: 1,

	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		editPassword: {
			rest: {
				method: "PUT",
				fullPath: "/v1/External/MiniProgram/EditPassword",
				auth: {
					strategies: ["Default", "Admin"],
					mode: "required", // 'required', 'optional', 'try'
				},
			},
			params: {
				body: {
					$$type: "object",
					password: "string",
					newPassword: "string",
				},
			},
			handler: require("./actions/editPassword.action"),
		},
		editUserInfo: {
			rest: {
				method: "PUT",
				fullPath: "/v1/External/MiniProgram/EditUserInfo",
				auth: {
					strategies: ["Default", "Admin"],
					mode: "required", // 'required', 'optional', 'try'
				},
			},
			params: {
				body: {
					$$type: "object",
					name: "string|optional",
					phone: "string|optional",
					gender: "string|optional",
					avatar: "string|optional",
				},
			},
			handler: require("./actions/editUserInfo.action"),
		},
		userInfo: {
			rest: {
				method: "GET",
				fullPath: "/v1/External/MiniProgram/UserInfo",
				auth: {
					strategies: ["Default", "Admin"],
					mode: "required", // 'required', 'optional', 'try'
				},
			},
			handler: require("./actions/getUserInfo.action"),
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {
		const url = process.env.FE_URL;
		const isSecurity = process.env.FE_SECURITY === "true";
		const privateKey = process.env.FE_PRIVATEKEY;
		const publicKey = process.env.FE_PUBLICKEY;

		this.historyService = new MeAPI({
			url,
			publicKey,
			privateKey,
			isSecurity,
			"x-api-client": "app",
		});
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
