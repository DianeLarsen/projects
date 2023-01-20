import React from "react";
import BookCard from "./BookCard.js";

export default function BookList(props) {
  console.log("props.books")
  console.log(props.books)
  return (
    <div className="list">
   
    {props.books[0] !== [undefined] && props.books.map((book, i) => {
        return (
       
        <BookCard
            key={i}
            image={book.imgThumb || ""}
            title={book.title}
            subTitle={book.subTitle}
            author={book.author}
            publishedDate={book.published}
            desc={book.description}
            price={0}
            ISBN={book.ISBN}
            publisher= {book.publisher}
          />
          
        
        )
      })
    }
     <h1>Not finding what you are looking for?  Contact us to see if we can order for you</h1>
    </div>
  );
}



