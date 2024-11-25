import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-3 text-center">
      <div class="footer">
        <div class="footer-one">
          <div class="footer-one__s1">
            <p>Data Science</p>
            <p>Database</p>
            <p>SEO</p>
            <p>machine learning</p>
            <p>AI</p>
            <p>Information Technilogy</p>
          </div>

          <div class="footer-one__s2">
            <p>Career</p>
            <p>Blogs</p>
            <p>Support</p>
            <p>Help and Support</p>
            <p>Investars</p>
            <p>Career Guide</p>
          </div>
        </div>

        <div class="footer-two">
          <h1>Udemy</h1>
          <p className="ff">&copy; Udemy,inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
