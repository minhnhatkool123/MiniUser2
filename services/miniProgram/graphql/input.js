const gql = require("moleculer-apollo-server").moleculerGql;

module.exports = gql`
	input EditPasswordInfo {
		password: String!
		newPassword: String!
	}

	input EditUserInfo {
		name: String
		phone: String
		gender: UserGender
		avatar: String
	}
`;
