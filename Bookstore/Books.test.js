const axios = require('axios').default;
const BooksControllers = require('../Controllers/BooksControllers.js');
const UserController = require('../Controllers/UserController.js');
const { books } = require('../test-data/books.js');
const { users } = require('../test-data/users.js');

let token;
beforeAll(async () => {
	const responseAuth = await UserController.login(users.user1.username, users.user1.password);
	const userData = responseAuth.data;
	token = userData.token;
});
describe('Get books', () => {
	test('Get all books and verify number', async () => {
		const response = await BooksControllers.getAllBooks();
		const books = response.data.books;
		expect(response.status).toBe(200);
		expect(books).toHaveLength(8);
	});
	test('Get all book and verify first book', async () => {
		const response = await BooksControllers.getAllBooks();
		const books = response.data.books;
		const subTitles = response.data.books.map((book) => book.subTitle);
		const firstBook = books[0];
		expect(response.status).toBe(200);
		expect(firstBook).toHaveProperty('isbn');
		console.log(subTitles);
	});
});

describe('Add books', () => {
	afterAll(async () => {
		const response = await BooksControllers.removeAllBooks(users.user1.userId, token);
		expect(response.status).toBe(204);
	});
	test('Add "Git Pocket Guide" book', async () => {
		const response = await BooksControllers.addBook(users.user1.userId, books[0].isbn, token);
		const responseJson = response.data;
		expect(responseJson.books[0].isbn).toBe(books[0].isbn);
		expect(response.status).toBe(201);
	});
	test('Add "Learning JavaScript Design Patterns" book', async () => {
		const response = await BooksControllers.addBook(users.user1.userId, books[1].isbn, token);
		const responseJson = response.data;
		expect(responseJson.books[0].isbn).toBe(books[1].isbn);
		expect(response.status).toBe(201);
	});
	test('Add "Designing Evolvable Web APIs with ASP.NET" book', async () => {
		const response = await BooksControllers.addBook(users.user1.userId, books[2].isbn, token);
		const responseJson = response.data;
		expect(responseJson.books[0].isbn).toBe(books[2].isbn);
		expect(response.status).toBe(201);
	});
	test('Add "Speaking JavaScript" book', async () => {
		const response = await BooksControllers.addBook(users.user1.userId, books[3].isbn, token);
		const responseJson = response.data;
		expect(responseJson.books[0].isbn).toBe(books[3].isbn);
		expect(response.status).toBe(201);
	});
});

describe('Remove books', () => {
	beforeAll(async () => {
		const response = await BooksControllers.addBook(users.user1.userId, books[0].isbn, token);
	});
	test('Remove "Git Pocket Guide" book', async () => {
		const response = await BooksControllers.removeBook(users.user1.userId, books[0].isbn, token);
		expect(response.status).toBe(204);
	});
});
