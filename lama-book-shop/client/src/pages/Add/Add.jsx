import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
 const navigate = useNavigate()
  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  }
  const handleClick= async e => {
e.preventDefault()
try{
     await axios.post("http://localhost:9000/books", book)
     navigate("/")
        }catch(err){
            console.log(err)
        }
}
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  );
}
