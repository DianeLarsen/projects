import React from "react";
import SearchArea from "./SearchArea.js";
import BookList from "./BookList.js";

export default function Books() {
  const [books, setBooks] = React.useState([]);
  const [searchField, setSearchField] = React.useState();
  const [sort, setSort] = React.useState("")

function SearchBooks(e){
    e.preventDefault()

    
const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
    let url = `https://www.googleapis.com/books/v1/volumes?q= ${searchField} &key= ${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
         console.log(data.items)
         cleanData(data.items)
         setBooks(data.items)
         }
         )
        

}

  function handleSearch(event) {
    setSearchField(event.target.value);
    
  }
function handleSort(e){
    setSort(e.target.value)
}
function cleanData(data){
    const cleanedData = data.map((book) => {
        if(book.volumeInfo.hasOwnProperty("publishedDate") === false){
            book.volumeInfo["publishedDate"] = '0000';
        } else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
            book.volumeInfo["imageLinks"] = {thumbnail: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"};
        }
        return book
    })
    return cleanedData
}
const sortedBooks = books.sort((a, b) => {
        if(sort === 'Newest'){
            return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
          }
        if(sort === 'Oldest'){
            return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
        } 
        return books
        
    })

  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <h1>Welcome to the bookstore, what are you looking for?</h1>
      <p className="recs">
        Search by genre, author, title!
      </p>
      <SearchArea searchBooks={SearchBooks} handleSearch={handleSearch} handleSort={handleSort}/>
      <BookList books={sortedBooks} />
      
       
    </section>
  );
}
