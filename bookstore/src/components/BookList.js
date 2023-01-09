import React from "react";
import BookCard from "./BookCard.js";

export default function BookList(props) {
  console.log(props.books)
  return (
    <div className="list">
    {props.books.map((book, i) => {
        return <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail || ""}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publishedDate={book.volumeInfo.publishedDate}
            desc={book.volumeInfo.description}
            price={book.price}
          />
        
      })
    }
    </div>
  );
}



