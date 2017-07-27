import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from './reducer_active_book.js';


//any key defined in combineReducers becomes available to global state
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
