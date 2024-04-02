import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBooks, selectBooks} from '../store/booksSlice.js';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';


function BooksPage() {


  const dispatch = useDispatch();
  const books = useSelector(selectBooks).books;
  const bookStatus = useSelector(selectBooks).status;
  const pageTitle = "📖 Book List with Router, Redux & Firebase";

  useEffect(() => {
    if (bookStatus == 'idle') {
      dispatch(fetchBooks())
    }
  }, []);
    
    
    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />
            <div className="books-container">

              { books.length ? 
              <div className="books-list">
                    
                    {books.map(book => 
                    
                    <Book key={book.id} book={book}  />
                    
                    )}

                </div> 
                : bookStatus == 'loading' ?
                <div>Loading...</div> 
                : <div>Your book list is empty. <Link to="/add-book">Click here.</Link> to add a new book</div> 

              }
                
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  