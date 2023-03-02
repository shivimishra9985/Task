import React from "react";
import axios from "axios";
import { useState } from "react";
import './css/search.css';
import Header from "./Header";

export default function Search() {
const [image, setImage] = useState("");
const clientId = "PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg";
const [result, setResult] = useState([]);
const handleChange = (event) => {
 setImage(event.target.value);
};
const handleSubmit = () => {
console.log(image);
const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId;
axios.get(url).then((response) => {
console.log(response);
setResult(response.data.results);
});
}
  return (
	<>
<Header/>
<div className="container">
 
 
 <div className="input">
  <input onChange={handleChange} type="text" name="image"    placeholder="Search for images"/>
  <button onClick={handleSubmit} type="submit">Search</button>

<div className="result">
  {result.map((image) => (
  <>
   <div className="card">
    <img src={image.urls.thumb} />
    <p className="username"> Photo by {image.user.name}</p>
   </div>
  </>
   ))}
   </div>
</div>
</div>

	</>
  )
}
