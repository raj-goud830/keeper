import React from "react";
import deleteSvg from "../assets/delete.svg";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><img className="deleteSvg" src={deleteSvg} alt="" /></button>
    </div>
  );
}

export default Note;


