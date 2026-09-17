import * as bookService from '../services/bookService,js';

export const fetchallBooks = async (req, res) =>{
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}