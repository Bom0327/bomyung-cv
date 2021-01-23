import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Scroll = () => {
  return (
    <div className="scroll">
        <a href="#about">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
  )
};

export default Scroll;
