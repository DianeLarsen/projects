import React, { useState } from "react";


/**
 * Cloudinary Setup
 * 1. Sign up for a Cloudinary account
 * 2. Go to Settings -> Upload
 * 3. Add an "upload preset" with 'Unsigned mode'
 *    to enable unsigned uploading to Cloudinary.
 */

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
      body: data
    }
  );
  const img = await res.json();
  console.log(img);
  return img.secure_url;
}

export default function ImageUpload() {
  const [formData, setFormData] = useState({
    // ...other fields
    img: ""
  });
  const [uploadingImg, setUploadingImg] = useState(false);

  const handleFileChange = async event => {
    const [file] = event.target.files;
    if (!file) return;

    setUploadingImg(true);
    const uploadedUrl = await uploadImage(file);
    setFormData({ ...formData, img: uploadedUrl });
    setUploadingImg(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // disable the form submit when uploading image
    if (uploadingImg) return;

    // upload `formData` to server
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* Inputs */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploadingImg}
      />
      <button type="submit" disabled={uploadingImg}>
        Submit
      </button>
    </form>
  );
}