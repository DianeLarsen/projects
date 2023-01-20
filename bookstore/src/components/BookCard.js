import React from "react";
import InventoryStore from "./InventoryStore";
import Popup from "./Popup";

export default function BookCard(props){
    const [isOpen, setIsOpen] = React.useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return(
        <div className="card-container" onClick={togglePopup}>
            <img className="img-card" src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <p>$ {props.price}</p>
                <h3>written by: {props.author}</h3>
                <p>Published: {props.publishedDate === '0000' ? "N/A" : props.publishedDate.substring(0,4)}</p>
                {isOpen && <Popup
      content={<>
        <b>Synopsys</b>
        <p>{props.desc}</p>
        
      </>}
      handleClose={togglePopup}
    />}
                
            </div>
            </div>
       
)
}

