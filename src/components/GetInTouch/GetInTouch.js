import React from "react";
import { GetInTouchForm } from "../GetInTouchForm/GetInTouchForm";
import "./GetInTouch.scss";

export const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <h1 className="get-in-touch-title">Get in Touch</h1>
      <p className="get-in-touch-caption">
        Have an inquiry or some feedbak for us? Fill out the form below to
        contact our team.
      </p>
      <GetInTouchForm/>
    </div>
  );
};
