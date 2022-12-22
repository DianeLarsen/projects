import React from "react";

export default function BookCard(props){
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Date: {props.publishedDate === '0000' ? "N/A" : props.publishedDate.substring(0,4)}</p>
            </div>
        </div>
)
}