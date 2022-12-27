import React from "react";
import data from "./data";
import Popup from "./Popup";

export default function InventoryStore(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [apiData, setApiData] = React.useState([])
  const [matchedImage, setMatchedImage] = React.useState([{url: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg", ISBN: null}])
  const [inventoryData, setInventoryData] = React.useState([])
  console.log("data")
  console.log(data)

  const results = data.map(function(item) { 
    //setInventoryData(...item,ISBN: item.GTIN, Type: item.Category)
    return {ISBN: item.GTIN, Type: item.Category} 
});
setInventoryData({...results})
console.log("results")
console.log(inventoryData)




  //console.log("apiData")
   // console.log(apiData)
    //console.log(props.ISBN)
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  //let imgUrl = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  React.useEffect(() => {
    for (let i = 0; i < data.length; i++) {
        // get an ISBN [i]
       
        // fetch for that ISBN
        // compare and confirm 
        // save the picture and ISBN to matchedImage
         
        
    }
        const apiKey = "AIzaSyB8BwcXXmWh-RBVHEbG1_OLfnV4c7KULcs";
        let url = `https://www.googleapis.com/books/v1/volumes?q= ${props.ISBN} &key= ${apiKey}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log("data.items from API")
            //console.log(data.items);
            console.log(data.items[0].volumeInfo.imageLinks.thumbnail);
            setApiData(data.items)
            //console.log(data.items[0].volumeInfo)
           // setMatchedImage 
           // setMatchedImage(data.items[0].volumeInfo.imageLinks.thumbnail);
           
          });
      }, [])
      for (let i = 0; i < 10; i++) {
        let gatheredStuff = [matchedImage]
        gatheredStuff[i].url = apiData[i].volumeInfo.imageLinks.thumbnail
        gatheredStuff[i].ISBN = apiData[i].volumeInfo.industryIdentifiers[0].identifier
        setMatchedImage(gatheredStuff)
    }
     //console.log("matchedImage")
  //console.log(matchedImage)
//   function imgDis(){
   
//     return imgUrl
//   }
  return (
    <div>
        {data.map((el, i) => {
         return ( 
            <ul >  
                
        {el.GTIN && <><img className="imgInv" src={matchedImage} alt="test"></img> <li key={i} >Type  {el.Category} ISBN  {el.GTIN} </li></>}
        
        </ul>
         )
         }).filter((e,k) => k < 10)
}
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

/* <div className="card-container" onClick={togglePopup}>
            <img src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.publishedDate === '0000' ? "N/A" : props.publishedDate.substring(0,4)}</p> 




                const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}
                
                
                
                
                */
