import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCart from './BookCart'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/book/books')
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <div style={{ marginTop: '7rem' }}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          books.map(book => (
            <div style={{ flex: '0 0 25%', maxWidth: '25%', padding: '10px' }} key={book.id}>
              <BookCart book={book} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Books;
