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
            <InventoryStore />
                {isOpen && <Popup
      content={<>
        <b>Synopsys</b>
        <p>{props.desc}</p>
        
      </>}
      handleClose={togglePopup}
    />}
                
            </div>
       
)
}

