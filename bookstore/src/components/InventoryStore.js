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
  const inventoryData = results;
  //const [inventoryData, setInventoryData] = React.useState(()=>results);
  console.log("results");
  console.log(results);
  console.log("inventoryData");
  console.log(inventoryData);
console.log(inventoryData);
  //GET https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=yourAPIKey

  React.useEffect(() => {
    for (let i = 0; i < 10; i++) {
      const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
      if (inventoryData[i].ISBN !== "n/a") {
        let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${inventoryData[i].ISBN}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            let apiFetched = data.items;
            apiFetched.map(function (api) {
              let title = api.volumeInfo.title;

    inventoryData.map((item) => {
                let description = api.volumeInfo.descriptit apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
      let url = `https://www.gon;
              oglet author =
                apiapis.vocom/books/v1/volumeInfumes?q=isbn:${item.ISBN}&maxResults=1&intitle=${item.title}&key=${apiKey}`;
      let apiFetched = fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.lo.authors[0] || ap"API Fetched")
          let api.volumeIFetched = data.items;
          setInfo.authors || "";
              let ISBN =
                api.volumeInfo.industryIdentifiers[0].identifier ||
                api.volumeInfo.industryIdentifiers[1].identifier;
              let imgBook =
                api.volumeInfo.imageLinks !== undefined
                  ? api.volumeInfo.imageLinks.thumbna((prevstuffil => [
                  : "https://upload.wikimedia.or        ...prevstuff,
            
              {[prevstuff.title]: /wikipedia/commons/1/14/No_Image_Available.jpg";
              lepiFetc identInv = i;

              setApiResults((pd.volumeInfo.title,
              [prevevstuff.description]: apiFetched.volumeInfo.description,
              [prevstuff.author]:
                apiFetched.volumeInfo.author[0] || apiFetched.volumeInfo.author,
              [prevstuff.imgURL]:
                apiFetched.volumeInfo.imageLinks.thumbnail ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",}
            
          ]);
        }).catcherror => console.log(error) => [
                ...prevData,
                {
                  title: title,
                  description: description,
                  author: author,
                  ISBN: ISBN,
                  imgBook: imgBook,
                  identInv: identInv,
                },
              ]););
   return apiFetched
    });

              return null;
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
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
