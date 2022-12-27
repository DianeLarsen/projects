import React from "react";
import data from "./data";
import Popup from "./Popup";

export default function InventoryStore(props) {
  // for popup
  const [isOpen, setIsOpen] = React.useState(false);
  // stored data fron inventory and API
  //const [matchedImage, setMatchedImage] = React.useState([{url: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg", ISBN: null}])
  const [inventoryData, setInventoryData] = React.useState([]);
console.log(inventoryData)
  const results = data.map(function (item) {
    return { ISBN: item.GTIN || "n/a", Type: item.Category, imgURL: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" };
  });
  React.useEffect(() => {
    setInventoryData(results);
    //       const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
    //       let url = `https://www.googleapis.com/books/v1/volumes?q= ${props.ISBN} &key= ${apiKey}`;
    //       fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           console.log("data.items from API")
    //           //console.log(data.items);
    //           console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
    //           setApiData(data.items)
    //           //console.log(data.items[0].volumeInfo)
    //          // setMatchedImage
    //          // setMatchedImage(data.items[0].volumeInfo.imageLinks.thumbnail);

    //         });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results.length]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  for (let i = 0; i < data.length; i++) {
    // get an ISBN [i]
    // fetch for that ISBN
    // compare and confirm
    // save the picture and ISBN to matchedImage
  }

  return (
    <div>
      <ul>
        {inventoryData
          .map((el, i) => {
            return (
              <React.Fragment key={i}>
                {el.ISBN && (
                  <>
                    <img
                      className="imgInv"
                      src={el.imgURL}
                      alt="test"
                    ></img>
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

