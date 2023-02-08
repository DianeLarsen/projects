import React, { useState, useContext } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import { UserContext } from '../../context/UserProvider.js'
import "./imageupload.css"
// found on site after logging in
const NAME_OF_UPLOAD_PRESET = "ml_default";
const YOUR_CLOUDINARY_ID = "dqjh46sk5";

// A helper function
async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", NAME_OF_UPLOAD_PRESET);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${YOUR_CLOUDINARY_ID}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );
  const img = await res.json();
  console.log(img);
  return img.secure_url;
}

export default function ImageUpload(props) {
  const {updateUser} = useContext(UserContext)
  const { setSettings } = props
  const [formData, setFormData] = useState({
    // ...other fields
    img: "",
  });
  console.log(formData.img)
console.log(formData)
  const [uploadingImg, setUploadingImg] = useState(null);

  const handleFileChange = async (event) => {
    const [file] = event.target.files;
    if (!file) return;

    setUploadingImg(true);
    const uploadedUrl = await uploadImage(file);
    setFormData({ ...formData, img: uploadedUrl });
    setUploadingImg(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedImage = {imgUrl: formData.img}
    // disable the form submit when uploading image
    if (uploadingImg) return;
    setSettings(prevSettings => ({...prevSettings, imgUrl: formData.img }))
    updateUser(updatedImage)
    setUploadingImg(null);
    // upload `formData` to server
  };

  return (
    <form className="pic-form" onSubmit={handleSubmit}>
      {/* Image preview */}
      {formData.img && (
        <figure>
          <img
            alt="preview"
            src={formData.img}
            style={{ width: 200, height: "auto" }}
          />
          <figcaption>Preview</figcaption>
        </figure>
      )}
      
 <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        onChange={handleFileChange}
        disabled={uploadingImg}
        style={{ display: "none" }}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      {uploadingImg === false && (
        <button type="submit" disabled={uploadingImg}>
          Submit
        </button>
      )}
            
     
    </form>
  );
}
