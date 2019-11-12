import React from "react";

import "./Footer.scss";
import NavigationItem from "../Navigation/NavigationItems/NavigationItem/NavigationItem";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer" name="section-contact">
      <div className="footer__info">
        <div className="footer__info__item">
          <h4>Pracownia</h4>
          <span>Żniwna 1</span>
          <span>43-100 Tychy (Poland)</span>
        </div>
        <div className="footer__info__item">
          <h4>Kontakt</h4>
          <a href="mailto:biuro@projektw.pl">biuro@projektw.pl <i className="far fa-envelope"></i></a>
          <span>+48 608 466 901</span>
          <span>+48 602 194 398</span>
        </div>
        <div className="footer__info__item">
          <h4>Nawigacja</h4>
          <nav className="footer__nav">
            <div className="footer__nav__item">
              <NavigationItem exact link="/">
                Home
              </NavigationItem>
              <NavigationItem link="/lab">Pracownia</NavigationItem>
              <NavigationItem link="/offer">Oferta</NavigationItem>
              <NavigationItem link="/partners">Partnerzy</NavigationItem>
              <NavigationItem link="/contact">Kontakt</NavigationItem>
            </div>
            <div className="footer__nav__item">
              <NavigationItem link="/projects">Projekty</NavigationItem>
              <NavigationItem link="/projects-premium">
                &nbsp;&rarr;&nbsp;Premium
              </NavigationItem>
              <NavigationItem link="/realisations">Realizacje</NavigationItem>
              <NavigationItem link="/realisations-premium">
                &nbsp;&rarr;&nbsp;Premium
              </NavigationItem>
            </div>
          </nav>
        </div>
        <div className="footer__info__item">
          <h4>Obserwuj nas</h4>
          <a href="https://www.facebook.com/ProjektWPAW/">
            <i className="fab fa-facebook footer__icon"></i>
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__item">
          <span className="no-wrap">
            Projekt W &nbsp;&copy; <b>{currentDate}</b>
          </span>{" "}
          <span className="no-wrap">Wszelkie&nbsp;prawa&nbsp;zastrzeżone.</span>
        </div>
        <div className="footer__copyright__item creator no-wrap">
          Site made by <a href="http://samuelk.pl">Samuel Kędziora</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
