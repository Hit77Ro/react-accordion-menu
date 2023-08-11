import React, { useState } from "react";

const Item = ({ item: { title, content }, isOpen, onClick }) => {
  return (
    <div className={isOpen ? "item show" : "item"}>
      <div className="header" onClick={onClick}>
        <h1>{title} </h1>
        <button>
          {" "}
          <i className="fas fa-chevron-down"></i>{" "}
        </button>
      </div>
      <div className="body">
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
