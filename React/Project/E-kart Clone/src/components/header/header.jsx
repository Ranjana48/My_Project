import React from "react";
import "../header/header.css";
import logo from "../../Assest/photo/logo.png";
import searchIcone from "../../Assest/photo/searchIcon.png";
import Select from "../../components/header/selectDrops/select";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="col-sm-5">
              <div
                className="headerSearch d-flex align-items- 
                centre"
              >
                <div className="searchDrop cursor position-relative ">
                  All Categories
                  <Select />
                </div>

                <div className="search">
                  <input
                    type="text"
                    className="searchInput"
                    placeholder="Search for items...."
                  />
                </div>
                <div className="searchIcon cursor">
                  <img src={searchIcone} alt="searchIcon" className="Icon " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
