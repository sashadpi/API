const axios = require('axios');
test('Get all posts', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const posts = response.data;
	expect(posts).toHaveLength(100);
	expect(posts.length).toBe(100);
});
