import React, { useContext, useEffect, useState } from "react";
import "../css/ProfileImage.css";
import { UserContext } from "../context/UserProvider.js";

export default function ProfileCard() {
  const {
    user: { firstName },
  } = useContext(UserContext);
  const initalCard = {
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    status: "",
    active: true,
  };
  const [inputs, setInputs] = useState(initalCard);
  const [card, setCard] = useState(initalCard);
  const [active, setActive] = useState(false);
 
  const [btnText, setBtnText] = useState("fa-pen");

  function handleChange(e) {
    const { value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      status: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCard(inputs);
  }
  useEffect(() => {
    if (active === true) {
      setBtnText("fa-check");
    } else {
      setBtnText("fa-pen");
    }
  }, [active]);

  function toggleActive() {
    if (btnText === "fa-check") {
      setActive((prev) => !prev);
    } else {
      setActive((prev) => !prev);
    }
  }
  return (
    <div className="body">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label className="custom-file-upload fas">
            <div className="img-wrap">
              <img alt="" src={card.imagePreviewUrl} />
            </div>
          </label>
          <div className="name">{firstName}</div>
          <br />
          {!active ? (
            <div className="status">
              {card.status || "It's a beautiful Day"}
            </div>
          ) : (
            <div className="field">
              <label htmlFor="status">status:</label>
              <input
                id="status"
                type="text"
                onChange={handleChange}
                maxLength="35"
                value={inputs.status}
                placeholder="It's a nice day!"
                required
              />
            </div>
          )}
          <br />
          <div className="name">
            Tasks completed: (placeholder for task number)
          </div>

          <button type="submit" onClick={toggleActive}>
            <i className={`fa-solid ${btnText}`}></i>
          </button>
        </form>
      </div>
    </div>
  );
}
