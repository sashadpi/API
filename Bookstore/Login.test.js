const UserController = require('../Controllers/UserController');
const { users } = require('../test-data/users');

const axios = require('axios').default;
let token;
describe('Login', () => {
	test('Susses login', async () => {
		const responseAuth = await UserController.login(users.user1.username, users.user1.password);
		const userData = responseAuth.data;
		token = userData.token;
		expect(responseAuth.status).toBe(200);
		expect(userData.username).toBe('sashadpi');
		expect(userData.token).not.toBeUndefined();
	});
});
