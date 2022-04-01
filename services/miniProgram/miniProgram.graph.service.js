const _ = require("lodash");

const MiniProgramInfoConstant = require("./constants/MiniProgramInfoConstant");
const MeAPI = require("../../serviceDependencies/MEAPI");

module.exports = {
	name: "MiniProgram1.graph",

	version: 1,

	/**
	 * Settings
	 */
	settings: {
		graphql: {
			type: require("./graphql/type"),
			input: require("./graphql/input"),
			enum: require("./graphql/enum"),
			resolvers: {
				MutationUserInfo: {
					editPassword: {
						action: "v1.MiniProgram1.graph.editPassword",
					},
					editUserInfo: {
						action: "v1.MiniProgram1.graph.editUserInfo",
					},
				},
				QueryUserInfo: {
					getUserInfo: {
						action: "v1.MiniProgram1.graph.userInfo",
					},
				},
			},
		},
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		userInfo: {
			handler: require("./actions/getUserInfo.action"),
		},
		editPassword: {
			handler: require("./actions/editPassword.action"),
		},
		editUserInfo: {
			handler: require("./actions/editUserInfo.action"),
		},
		graphqlUserInfo: {
			graphql: {
				query: "QueryUserInfo:QueryUserInfo",
				mutation: "MutationUserInfo:MutationUserInfo",
			},
			handler(ctx) {
				return true;
			},
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
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
