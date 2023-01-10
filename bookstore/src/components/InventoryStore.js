import React from "react";
import data from "./data";

export default function InventoryStore(props) {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [inventoryData, setInventoryData] = React.useState([]);
  const [matchedInventoryData, setMatchedInventoryData] = React.useState([]);
  const [unmatched, setUnmatched] = React.useState([]);
  console.log(matchedInventoryData.length);
  console.log(unmatched.length);
  if (matchedInventoryData.length === inventoryData.length) {
    console.log(matchedInventoryData.length);
    console.log(matchedInventoryData);
  }

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  React.useEffect(() => {
    const results = data.map(function (item) {
      return {
        ISBN: item.ISBN,
        title: item.Title,
        imgURL:
          "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
      };
    });
    setInventoryData(results);
    //  console.log("rendered");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const promises = inventoryData.map(
      (item, i) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
            let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${item.ISBN}&maxResults=1`;

            let author;
            let imgURL;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                let apiFetched = data.items;
                //console.log(apiFetched[0].volumeInfo);
                if (apiFetched[0].volumeInfo) {
                  author = apiFetched[0].volumeInfo.authors
                    ? apiFetched[0].volumeInfo.authors[0]
                    : `Publisher: ${apiFetched[0].volumeInfo.publisher}`;
                  imgURL = apiFetched[0].volumeInfo.imageLinks.thumbnail
                    ? apiFetched[0].volumeInfo.imageLinks.thumbnail
                    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
                  setMatchedInventoryData((prevData) => [
                    ...prevData,

                    {
                      ISBN: item.ISBN,
                      title: apiFetched[0].volumeInfo.title || item.title,
                      description: apiFetched[0].volumeInfo.description || "",
                      author: author,
                      imgURL: imgURL,
                    },
                  ]);
                } else {
                  setUnmatched((prevMatched) => [...prevMatched, item.ISBN]);
                }
              })
              .catch((error)=> {console.log(error);setUnmatched((prevMatched) => [...prevMatched, item.ISBN]);
              });

            resolve();
          }, 1000 * inventoryData.length - 1000 * i)
        )
    );

    setNotes(matchedInventoryData);
    //console.log(notes);
    Promise.all(promises).then(() => console.log("done"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ul>
        {matchedInventoryData
          .map((el, i) => {
            return (
              <React.Fragment key={i}>
                {el.title && (
                  <>
                    <img className="imgInv" src={el.imgURL} alt="test"></img>
                    <li className="bookList">
                      {el.title} <p>Author: {el.author}</p>
                    </li>
                  </>
                )}
              </React.Fragment>
            );
          })
          .filter((e, k) => k < 10)}
      </ul>
    </div>
  );
}
