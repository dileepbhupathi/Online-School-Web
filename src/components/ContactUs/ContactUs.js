import React from "react";
import { ContactUsList } from "../ContactUsList/ContactUsList";
import { GetInTouch } from "../GetInTouch/GetInTouch";
import "./ContactUs.scss";

export const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content-container">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-description">
          Any questions or remarks? Just write us a message!
        </p>
        <ContactUsList />
      </div>
      <GetInTouch/>
    </div>
  );
};
