import React, { useState } from "react";
import "./OnlineSchoolWebsiteNavbar.scss";
import { RxTextAlignJustify,RxCross2 } from "react-icons/rx";
import {  Drawer } from "antd";

export const OnlineSchoolWebsiteNavbar = () => {
  // const [isMenu, setIsMenu] = useState(false);

  // const navMenu = () => {
  //   setIsMenu(!isMenu);
  // };

  const closeMenu = () => {
    setOpen(false)
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="school-web-navbar">
        <img
          src="https://capp.nicepage.com/images/default-logo.png"
          alt="logo"
          className="school-web-logo"
        />
        <div className="school-web-nav-button-icon-container" onClick={showDrawer}>
          <RxTextAlignJustify className="school-web-nav-button-icon" />
        </div>
      </nav>
      {/* {isMenu ? (
        <div className="school-nav-menu-container">
          <div>
            <RxCross2 className="school-menu-cross-icon" onClick={closeMenu}/>
          </div>
          <div className="school-nav-menu-anchors">
            <a href="/">Home</a>
            <a href="/">page 5</a>
            <a href="/">page 6</a>
            <a href="/">page 7</a>
          </div>
           
        </div>
      ) : null} */}
      <Drawer
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        // key={placement}
      >
            <RxCross2 className="school-menu-cross-icon" onClick={closeMenu}/>

        <a href="/">Home</a>
        <a href="/">Page 5</a>
        <a href="/">page 6</a>
        <a href="/">page 7</a>
      </Drawer>
    </>
  );
};
