const gql = require("moleculer-apollo-server").moleculerGql;

module.exports = gql`
	input EditPasswordInput {
		password: String!
		newPassword: String!
	}

	input EditUserInput {
		name: String
		phone: String
		gender: UserGender
		avatar: String
	}
`;
