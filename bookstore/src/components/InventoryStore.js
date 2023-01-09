import React from "react";
import data from "./data";
import Popup from "./Popup";

export default function InventoryStore(props) {
  // for popup
  const [isOpen, setIsOpen] = React.useState(false);
  // stored data fron inventory and API
  const [apiResults, setApiResults] = React.useState([
    { title: "", description: "", author: "", ISBN: "", imgBook: "" },
  ]);
  //const [matchedImage, setMatchedImage] = React.useState([])
  const cleanupInv = data.filter((el) => {return el.Category === "Book"})
  const otherInv = data.filter((el) => {return el.Category !== "Book"})
  //console.log(cleanupInv)
  const results = cleanupInv.map(function (item) {
    
      return {
        ISBN: item.GTIN || "n/a",
        Type: item.Category,
        imgURL:
          "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
      };
    
  });
  const inventoryData = results;
  //const [inventoryData, setInventoryData] = React.useState(()=>results);
  //console.log(inventoryData);
  //console.log(apiResults);
  //GET https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=yourAPIKey

  // React.useEffect(() => {
  //   for (let i = 0; i < 10; i++) {
  //     const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
  //     if (inventoryData[i].ISBN !== "n/a") {
  //       let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${inventoryData[i].ISBN}`;
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           let apiFetched = data.items;
  //           apiFetched.map(function (api) {
  //             let title = api.volumeInfo.title;
  //             let description = api.volumeInfo.description;
  //             let author =
  //               api.volumeInfo.authors[0] || api.volumeInfo.authors || "";
  //             let ISBN =
  //               api.volumeInfo.industryIdentifiers[0].identifier ||
  //               api.volumeInfo.industryIdentifiers[1].identifier;
  //             let imgBook =
  //               api.volumeInfo.imageLinks !== undefined
  //                 ? api.volumeInfo.imageLinks.thumbnail
  //                 : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
  //             let identInv = i;

  //             setApiResults((prevData) => [
  //               ...prevData,
  //               {
  //                 title: title,
  //                 description: description,
  //                 author: author,
  //                 ISBN: ISBN,
  //                 imgBook: imgBook,
  //                 identInv: identInv,
  //               },
  //             ]);

  //             return null;
  //           });
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  for (let i = 0; i < data.length; i++) {
    // get an ISBN [i]
    // fetch for that ISBN
    // compare and confirm
    // save the picture and ISBN to matchedImage
  }
  //   function delay(t, data) {
  //     return new Promise(resolve => {
  //         setTimeout(resolve.bind(null, data), t);
  //     });
  // }
  // function gatherData(){

  //   // const transferData =
  //   inventoryData.map((item)=>{
  //     setTimeout(() => {
  //       console.log("Delayed for 1 second.");
  //     }, "1000")
  //     const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
  //           let url = `https://www.googleapis.com/books/v1/volumes?q= ${item.ISBN} &key= ${apiKey}`;
  //     fetch(url)
  //           .then((res) => res.json())
  //           .then((data) => {
  //               let apiFetched = data.items;
  //               apiFetched.map(function(api) {
  //                 let title = api.volumeInfo.title;
  //                 let description = api.volumeInfo.description;
  //                 let author = api.volumeInfo.authors[0];
  //                 let ISBN = api.volumeInfo.industryIdentifiers[0].identifier;
  //                 let imgBook = api.volumeInfo.imageLinks.thumbnail

  //                 setApiResults(prevData => [...prevData, {title: title, description: description, author:author, ISBN:ISBN, imgBook:imgBook}])

  //                 return null
  //               });
  //             }).catch(function(error) {
  //               console.log(error);
  //             });
  //             return null
  //           })
  //         }

  return (
    <div>
      <ul>
        {inventoryData
          .map((el, i) => {
            return (
              <React.Fragment key={i}>
                {el.ISBN && (
                  <>
                    <img className="imgInv" src={el.imgURL} alt="test"></img>
                    <li className="bookList">
                      Type: {el.Type} <p>ISBN: {el.ISBN}</p>
                    </li>
                  </>
                )}
              </React.Fragment>
            );
          })
          .filter((e, k) => k < 10)}
      </ul>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Synopsys</b>
              <p>{props.desc}</p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
