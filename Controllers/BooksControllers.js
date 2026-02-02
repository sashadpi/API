const BaseController = require('./BaseControllers');

class BooksController extends BaseController {
	async getAllBooks() {
		return await this.axiosInstance.get('/BookStore/v1/Books');
	}

	async addBook(userId, isbn, token) {
		return await this.axiosInstance.post(
			'/BookStore/v1/Books',
			{
				userId,
				collectionOfIsbns: [
					{
						isbn,
					},
				],
			},
			{
				headers: {
					authorization: `Bearer ${token}`,
				},
			},
		);
	}
	async removeBook(userId, isbn, token) {
		return await this.axiosInstance.delete('/BookStore/v1/Book', {
			data: {
				isbn,
				userId,
			},
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	}
	async removeAllBooks(userId, token) {
		return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	}
}

module.exports = new BooksController();
