import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="body-section">
      <div className="container-fluid">
        <div className="container">
          <h2>
            <FontAwesomeIcon icon={faUserTie} /> About Me
          </h2>
          <hr />
          <div>
            <div className="about-img-container">
              <img className="about-img" src="images/me-img.jpg" alt="me" />
            </div>
            <div className="intro">
              <p>
                はじめまして。私は韓国の釜山で生まれ2009年に父の仕事がきっかけで日本に来ました。
                その後、日本で大学を卒業し社会人としてお仕事をしてきました。
                最近はオンラインでWeb開発の授業を受講し、Webアプリの作成に没頭しています。
              </p>
            </div>
          </div>
          <div className="contact-details">
            <h5>Contact Details</h5>
            <p>Bomyung Choi</p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 〒 213-0033
              神奈川県川崎市高津区下作延7-6-10 ファミールMO 102号
            </p>
            <p>
              <i className="fas fa-envelope"></i> c0327c@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> 070-3123-8905
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
