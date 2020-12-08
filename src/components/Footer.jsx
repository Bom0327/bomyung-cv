import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="footer-section">
      <footer className="footer-container">
        <p>Copyright ⓒ {year} Bomyung Choi</p>
      </footer>
    </section>
  );
}

export default Footer;
