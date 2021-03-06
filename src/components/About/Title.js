import React from 'react';
import { Link } from "react-router-dom";


const Title = () => {
  return (
    <section id="about">
      <div className="title-container">
        <div className="title-img"></div>

        <div className="title-content">
          <h2>About</h2>
          <ol>
            <li className="first-item">
              <Link to="/">Home</Link>
            </li>
            <li className="last-item">About me</li>
          </ol>
        </div>
      </div>
    </section>
  )
};

export default Title;



