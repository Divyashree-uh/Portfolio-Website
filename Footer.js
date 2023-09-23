import React from "react";
import logo from "../../assets/ammuuu.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2023 Created By Divyashree V With 💜</p>
</div>
      {/* social */}
      <ul className="footer-social-media">
        
        <li>
        <a href="https://www.linkedin.com/in/divyashree-v-46a499287/" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
