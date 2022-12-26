import React from "react";
import SearchArea from "./SearchArea.js";
import BookList from "./BookList.js";
import * as xlsx from "xlsx";

export default function Books() {
  const [books, setBooks] = React.useState([]);
  const [searchField, setSearchField] = React.useState();
  const [sort, setSort] = React.useState("");
  const [inventory, setInventory] = React.useState([""]);
  const [display, setDisplay] = React.useState([])

  function SearchBooks(e) {
    e.preventDefault();

    const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
    let url = `https://www.googleapis.com/books/v1/volumes?q= ${searchField} &key= ${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data.items from API")
        console.log(data.items);
        cleanData(data.items);
        setBooks(data.items);
        demo(books);
      });
  }
  console.log("inventory");
  console.log(inventory);
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        //console.log(json);
        setInventory({
          category: json[0].Category,
          ISBN: json[0].GTIN,
        });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  if (books[0]) {
    console.log("ISBN fron API");
    console.log(books[0].volumeInfo.industryIdentifiers[0].identifier);
  }
  if (inventory[0] !== "") {
    console.log("ISBN fron excel");
    console.log(inventory.ISBN);
  }
  //  if (books[0].volumeInfo.industryIdentifiers[0].identifier === inventory.ISBN ){
  // console.log(books[0])
  // }

  function handleSearch(event) {
    setSearchField(event.target.value);
  }
  function handleSort(e) {
    setSort(e.target.value);
  }
  function cleanData(data) {
    const cleanedData = data.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
        };
      }
      return book;
    });
    return cleanedData;
  }
  function demo() {
    // getting all items from object

    const book = Object.keys(books)
      .map((item) => item["items"])
      .reduce((acc, rec, id) => {
        // getting Cover, Title, Author from each item
        let singleBookCover = rec[id].volumeInfo.imageLinks.thumbnail;
        let singleBookTitle = rec[id].volumeInfo.title;
        let singleBookAuthor = rec[id].volumeInfo.authors[0];
        let singlePublished = rec[id].volumeInfo.publishedDate;

        // Creating new array only with Cover, Title, Author
        return [
          ...acc,
          {
            singleBookCover,
            singleBookTitle,
            singleBookAuthor,
            singlePublished,
          },
        ];
      }, [])
      .forEach((item) => { 
        setBooks(item);

        // // For each item on our array, we creating h1
        // let title = document.createElement('h1');
        // title.textContent = `${item.singleBookTitle} by ${item.singleBookAuthor}`;

        // // img
        // let img = document.createElement('img');
        // img.src = item.singleBookCover;
        // img.alt = `${item.singleBookTitle} by ${item.singleBookAuthor}`;

        // // and div wrapper
        // let container = document.createElement('div');

        // // adding our child elements to wrapper
        // container.appendChild(title).appendChild(img);

        // // adding our wrapper to body
        // document.body.appendChild(container);
      });
    return book;
  } 
// if (inventory[1]){

  let newBooks = inventory.map(x => {
    let item = books.find(item => item.volumeInfo.industryIdentifiers[0].identifier || item.volumeInfo.industryIdentifiers[1].identifier === x.ISBN);
    if (item) { 
      return {title: item.volumeInfo.title};
    }      
  }).filter(item => item !== undefined); // Can also use filter(item => item);
  //setDisplay(newBooks)


// } else {
//   return
// }


  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    }
    if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
    return books;
  });

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
      <p className="recs">Search by genre, author, title!</p>
      <SearchArea
        searchBooks={SearchBooks}
        handleSearch={handleSearch}
        handleSort={handleSort}
      />
      <BookList books={sortedBooks} />
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>
    </section>
  );
}

/* <div>
{books.items.map(item => <div key={item.id}>{item.title}</div>)
</div> */
