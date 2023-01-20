import React, { useEffect } from "react";
import SearchArea from "./SearchArea.js";
import BookList from "./BookList.js";
//import InventoryStore from "./InventoryStore.js";
import * as xlsx from "xlsx";
import data from "./data.js";

export default function Books() {
  const [books, setBooks] = React.useState([]);
  const [searchField, setSearchField] = React.useState();
  const [sort, setSort] = React.useState("");
  const [inventory, setInventory] = React.useState([""]);
  const [display, setDisplay] = React.useState([]);
  const [bookFound, setBookFound] = React.useState(false);
  // const [triggerSort, setTriggerSort] = React.useState(false);
  const [searchedBooks, setSearchedBooks] = React.useState([]);
  // console.log(display);
  const [showExcel, setShowExcel] = React.useState(false);

  function SearchBooks(e) {
    e.preventDefault();
    setSearchedBooks([]);

    const findBook = data
      .filter((element) => element.ItemName.toLowerCase().includes(searchField))
      .filter((item) => item.Category.includes("Book"));
    // sets searched books to items(ISBN and title) found in inventory and then triggers the useEffect
    if (findBook === undefined) {
      return;
    } else if (findBook[0]) {
      findBook.map((things) =>
        setSearchedBooks((prevbooks) => [
          ...prevbooks,
          { ISBN: things.GTIN, title: things.ItemName },
        ])
      );
      setBookFound((prev) => !prev);
    }
  }

  // do API search for books to get info
  useEffect(() => {
    setBooks([]);
    setDisplay([]);
    searchedBooks.forEach((stuff) => {
      // console.log(stuff.ISBN)
      // console.log(stuff.title);
      const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
      let url = `https://www.googleapis.com/books/v1/volumes?q=ISBN:${stuff.ISBN}&title=${stuff.title}&maxResults=5&key= ${apiKey}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const dataItems = data.items;
          console.log("API Pulled");
          dataItems.forEach((items) => {
            // rewrite as or ||
            if (
              items.volumeInfo.industryIdentifiers[1].type === "ISBN_13" &&
              items.volumeInfo.industryIdentifiers[1].identifier === stuff.ISBN
            ) {
              setDisplay((previtems) => [...previtems, items]);
            } else if (
              items.volumeInfo.industryIdentifiers[0].type === "ISBN_13" &&
              items.volumeInfo.industryIdentifiers[0].identifier === stuff.ISBN
            ) {
              setDisplay((previtems) => [...previtems, items]);
            }
          });
        });
    });

    // setBookFound(prev => !prev);
    // eslint-disable-next-line
  }, [searchedBooks, bookFound]);
  // `https://books.google.com/books/content?id=${items.id}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api`

  const newDisplay = display.map((items) => {
    console.log(items);
    const things = {
      title: items.volumeInfo.title,
      subTitle: items.volumeInfo.subTitle || "",
      ISBN:
        items.volumeInfo.industryIdentifiers[1].identifier ||
        items.volumeInfo.industryIdentifiers[0].identifier,
      author:
        items.volumeInfo.authors === undefined
          ? "N/A"
          : items.volumeInfo.authors[0],
      published: items.volumeInfo.publishedDate,
      description: items.volumeInfo.description,
      publisher: items.volumeInfo.publisher,
      imgThumb:
        items.volumeInfo.imageLinks.thumbnail ||
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
    };

    return things;
  });

  useEffect(() => {
    console.log(newDisplay);
    setBooks(newDisplay);
    // eslint-disable-next-line
  }, [searchedBooks, display]);

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
          });
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  function handleSearch(event) {
    setSearchField(event.target.value);
  }
  function handleSort(e) {
    setSort(e.target.value);
  }
  // function cleanBooks(){

  // }
  const sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.published.substring(0, 4)) -
        parseInt(a.published.substring(0, 4))
      );
    }
    if (sort === "Oldest") {
      return (
        parseInt(a.published.substring(0, 4)) -
        parseInt(b.published.substring(0, 4))
      );
    }
    return books;
  });
  let excelStatus
  if (showExcel === false){
    excelStatus = "Show Excel Loader"
  } else {
    excelStatus = "Hide Excel Loader"
  }
  //   console.log("sortedBooks")
  // console.log(sortedBooks)
  //  console.log("display")
  //  console.log(display)
  // console.log("books")
  // console.log(books)
  return (
    <section className="section" key={inventory.index}>
      
        {showExcel ? <form>
          <label htmlFor="upload">Upload File</label>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
          <button onClick={()=>setShowExcel(prev => !prev)}>{excelStatus}</button>
        </form> : <button onClick={()=>setShowExcel(prev => !prev)}>{excelStatus}</button>}
        <SearchArea
          searchBooks={SearchBooks}
          handleSearch={handleSearch}
          handleSort={handleSort}
        />
      
      <BookList books={sortedBooks} />
      
     
    </section>
  );
}

/* <div>
{books.items.map(item => <div key={item.id}>{item.title}</div>)
</div> */
