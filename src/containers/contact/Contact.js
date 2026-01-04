import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, greeting} from "../../portfolio";
import {Fade} from "react-reveal";

import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="footer-grid">
          <div className="footer-column">
            <h2 className="footer-brand">{greeting.username}</h2>
            <p className="footer-desc">
              A passionate Full Stack Software Developer building web and mobile
              applications.
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} {greeting.username}. All rights
              reserved.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Sections</h3>
            <ul className="footer-links">
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#achievement">Achievements</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              {contactInfo.resumeLink && (
                <li>
                  <a
                    href={contactInfo.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              )}
              <li>
                <a href={"mailto:" + contactInfo.email_address}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <div className="footer-social-icons">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
