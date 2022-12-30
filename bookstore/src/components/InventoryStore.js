import React from "react";
import data from "./data";
import Popup from "./Popup";

export default function InventoryStore(props) {
  // for popup
  const [isOpen, setIsOpen] = React.useState(false);

  const [inventoryData, setInventoryData] = React.useState([]);

  const results = data.map(function (item) {
    return {
      ISBN: item.GTIN || "n/a",
      Type: item.Category,
      title: item.ItemName,
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
      
    };
  });
  console.log("results");
  console.log(results);
  console.log("inventoryData");
  console.log(inventoryData);

  React.useEffect(() => {
    setInventoryData(results);

    inventoryData.map((item) => {
      const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
      let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${item.ISBN}&maxResults=1&intitle=${item.title}&key=${apiKey}`;
      let apiFetched = fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log("API Fetched")
          let apiFetched = data.items;
          setInventoryData((prevstuff) => [
            ...prevstuff,
            
              {[prevstuff.title]: apiFetched.volumeInfo.title,
              [prevstuff.description]: apiFetched.volumeInfo.description,
              [prevstuff.author]:
                apiFetched.volumeInfo.author[0] || apiFetched.volumeInfo.author,
              [prevstuff.imgURL]:
                apiFetched.volumeInfo.imageLinks.thumbnail ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",}
            
          ]);
        }).catch(error => console.log(error));
   return apiFetched
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inventoryData.length]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
                      Type: {el.title} <p>ISBN: {el.ISBN}</p>
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
