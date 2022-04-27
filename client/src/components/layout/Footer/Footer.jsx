import React from "react";
import "./Footer.css";
import {
  FaGooglePlay,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h3>Download </h3>
        {/* <p>Download App for Android and IOS</p> */}
        <div className="appContainer">
          <a href="https://github.com/showbazi">
            <BsApple className="iconStyle" />
          </a>
          <a href="https://github.com/showbazi">
            <FaGooglePlay className="iconStyle" />
          </a>
        </div>
        {/* <img src={playstore} alt="playstore" />
              <img src={appstore} alt="appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>ShowBaziStore.</h1>
        <p>Quality Products at your DoorStep</p>
        <p>Copyrights &copy; 2022 ShowBazi, Inc.</p>
      </div>

      <div className="rightFooter">
        <h3>Follow</h3>
        <div className="socialsContainer">
          <a href="https://github.com/showbazi">
            <FaInstagram className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaFacebook className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaTwitter className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaLinkedin className="iconStyle" />
          </a>

          <a href="https://github.com/showbazi">
            <FaGithub className="iconStyle" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
