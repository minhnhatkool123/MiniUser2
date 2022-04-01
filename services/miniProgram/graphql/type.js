const gql = require("moleculer-apollo-server").moleculerGql;

module.exports = gql`
	type QueryUserInfo {
		getUserInfo: GetUserInfoMessageResponse!
	}

	type MutationUserInfo {
		editPassword(input: EditPasswordInput!): MessageResponse!
		editUserInfo(input: EditUserInput!): MessageResponse!
	}

	type GetUserInfoMessageResponse {
		code: Int
		message: String
		userInfo: UserInfo
	}

	type UserInfo {
		id: Int
		name: String
		phone: String
		email: String
		gender: String
		avatar: String
		createdAt: DateTime
		updatedAt: DateTime
	}
`;
