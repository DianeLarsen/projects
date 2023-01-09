import React from "react";
import SearchArea from "./SearchArea.js";
import BookList from "./BookList.js";
import InventoryStore from "./InventoryStore.js";
import * as xlsx from "xlsx";
// import data from "./data.js";

export default function Books() {
  const [books, setBooks] = React.useState([]);
  const [searchField, setSearchField] = React.useState();
  const [sort, setSort] = React.useState("");
  const [inventory, setInventory] = React.useState([""]);
  //const [display, setDisplay] = React.useState([])

  function SearchBooks(e) {
    e.preventDefault();

    const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
    let url = `https://www.googleapis.com/books/v1/volumes?q= ${searchField} &key= ${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data.items from API");
        console.log(data.items);
        cleanData(data.items);
        setBooks(data.items);
        demo(books);
      });
  }
  // console.log("inventory");
  // console.log(inventory);
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
        console.log(json);
        for (let i = 0; i < inventory.length; i++) {
          setInventory(...inventory, {
            category: json[i].Category,
            ISBN: json[i].GTIN,
            title: json[i].ItemName
          })
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  if (books[0]) {
    console.log("ISBN fron API");
    console.log(books[0].volumeInfo.industryIdentifiers[0].identifier);
  }
  if (inventory[1]) {
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
        let singleBookCover = rec[id].volumeInfo.imageLinks.thumbnail;
        let singleBookTitle = rec[id].volumeInfo.title;
        let singleBookAuthor = rec[id].volumeInfo.authors[0];
        let singlePublished = rec[id].volumeInfo.publishedDate;

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
      });
    return book;
  }

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
    <section key={inventory.index}>
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
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>
      <SearchArea
        searchBooks={SearchBooks}
        handleSearch={handleSearch}
        handleSort={handleSort}
      />
      <BookList books={sortedBooks} />
      <InventoryStore
        keys={inventory.index}
        type={inventory.category}
        IDEN={inventory.ISBN}
      />
    </section>
  );
}

/* <div>
{books.items.map(item => <div key={item.id}>{item.title}</div>)
</div> */
