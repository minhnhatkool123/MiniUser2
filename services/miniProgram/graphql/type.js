const gql = require("moleculer-apollo-server").moleculerGql;

module.exports = gql`
	type QueryNode2 {
		getUserInfo: GetUserInfoMessageResponse!
	}

	type MutationNode2 {
		editPassword(input: EditPasswordInfo!): MessageResponse!
		editUserInfo(input: EditUserInfo!): MessageResponse!
	}

	type GetUserInfoMessageResponse {
		code: Int
		message: String
		userInfo: UserInfo
	}

	type UserInfo {
		id: BigInt
		name: String
		phone: String
		email: String
		gender: String
		avatar: String
		createdAt: String
		updatedAt: String
	}
`;
