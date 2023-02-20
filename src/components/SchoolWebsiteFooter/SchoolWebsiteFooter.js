import React from "react";
import "./SchoolWebsiteFooter.scss";

export const SchoolWebsiteFooter = () => {
  return (
    <div className="schoo-web-footer">
      <p className="school-web-footer-caption">Sample text. Click to select the Text Element.</p>
      <p className="school-web-footer-anchor">
        <a href="https://nicepage.com/landing-page" className="footer-anchor">
          Free Landing Page{" "}
        </a>{' '}
        created with{" "}
        <a href="/" className="footer-anchor">
          Website Builder Software
        </a>
        .
      </p>
    </div>
  );
};
