import React, { useEffect, useState } from "react";
import Item from "./Item";
import { json } from "./json";

const Accordion = () => {
    // Initialize with 0 to keep all items closed except the  first item
    const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {json.map((obj, index) => (
        <Item
          key={index}
          item={obj}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
