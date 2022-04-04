import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className="faq">
      <div>
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FontAwesomeIcon icon={faMinus} color="blue" />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default FAQ;
