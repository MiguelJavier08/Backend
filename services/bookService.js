import * as book from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetchAllBooks();
    return books;
}