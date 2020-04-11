import React from 'react';
import BookCard from './BookCard';


const BookResults = (props) => {
    return (
        <div className='Results'>
        {
            props.books.map((books,i) => {
                return <BookCard 
                    key={i}
                    image={books.volumeInfo.imageLinks.thumbnail}
                    title={books.volumeInfo.title}
                    author={books.volumeInfo.authors}
                    description={books.volumeInfo.description}
                    previewLink={books.volumeInfo.previewLink}
                    saveBook= {props.saveBook}
                    id={books.id}
                     />
            })
            
        }
        </div>
    )
}

export default BookResults;
