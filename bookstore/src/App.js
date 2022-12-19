import Header from './components/Header.js';
import Books from './components/Books.js';
import './App.css';
import React, { useState } from 'react';
import axios from "axios"



function App() {

const container = document.getElementById("books");
const [toggle, setToggle] = useState("none")
let imgurl, publish, desc, title
function toggleDisplay(){
  if (toggle === "none"){
    setToggle("block")
  }else{
    return
  }

}
 //container.style.display = "none";

// document.getElementById("search")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.key === 13) {
//         loadBooks();
//     }
// });

// load books on click
function loadBooks() {
let truncate = (element, limit, after) => {
  if(!element || !limit) return;
  
  let content = element.innerHTML.trim();
  
  content = content.split(' ').slice(0, limit);
  content = content.join(' ') + (after ? after : '');
  element.innerHTML = content;
};

const search = document.getElementById("search");
let query = search.value;
const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
let url = "https://www.googleapis.com/books/v1/volumes?q="+ query + "&key=" + apiKey;
 setTimeout(()=>{ setToggle("block"); }, 600);
// get the url
axios.get(url)
  .then(res => { 
    let data = res.data;
    console.log(res);
    // container.innerHTML = "";
    //  Array.from(container.children).forEach((item) => {
    //    item.parentElement.removeChild(item)
    //  });
    
    for(let i = 0; i <= 9; i++) {
      let items = data.items[i];
      let volume = items.volumeInfo;
      title = volume.title;
      desc = volume.description;
      publish = volume.publishedDate;
      let img = volume.imageLinks;
      imgurl = img.thumbnail;
      
      // document.getElementById("title").innerHTML = title;
      // document.getElementById("published").innerHTML = "Published on " + publish;
      // document.getElementById("desc").innerHTML = desc;
      // document.getElementById("img_url").src = imgurl;
      
      const books = document.createElement("div");
            books.className = "book-release";
            
      
      // container.appendChild(books);
      truncate(books, 220, '...');
    }
  
}).catch(error => {
    console.log('error', error);
});
}
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Books loadBooks={loadBooks} imgurl={imgurl} title={title} desc={desc} publish={publish}/>
      </header>
    </div>
  );
}

export default App;
