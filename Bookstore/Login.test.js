const axios = require('axios').default;

describe('Login', () => {
	test('Susses login', async () => {
		const response = await axios.post(
			'https://bookstore.toolsqa.com/Account/v1/Login',
			{
				userName: 'sashadpi',
				password: '!Pre2225500',
			},
		);
		const userData = response.data;
		expect(response.status).toBe(200);
		expect(userData.username).toBe('sashadpi');
		expect(userData.token).not.toBeUndefined();
		console.log(userData);
	});
});
