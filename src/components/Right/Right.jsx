import React from "react";
import "./Right.css";
import { BiSearch } from "react-icons/bi";
import Channel from "../channels/channel";
import TagBox from "./TagsBoxes/Tagbox"; 


const Right = () => {
  return (
    <div className="right">
      <div className="box-search">
        <input type="text" className="search" placeholder="Search " />
        <BiSearch className="search-icon" />
      </div>

      <div className="might-box">
        <div className="might">
          <h1 className="might-like">You might like</h1>
          <Channel
            name="TypeScript"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            userName="@typrscript"
          />
          <Channel
            name="Github"
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            userName="@github"
          />
          <Channel
            name="React"
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
            userName="@Reactjs"
          />
          <button className="show-more">Show more</button>
        </div>
      </div>

      <div className="trends-box">
        <div className="trends">
          <div className="row">
            <h1 className="header-text">Trends for you</h1>
          </div>
          <TagBox trending="1" tag="#Reactjs" tweets="430.2k Tweets" />
          <TagBox trending="2" tag="#programming" tweets="150.2k Tweets" />
          <TagBox trending="3" tag="#frontend" tweets="130.2k Tweets" />
          <button className="show-more">Show more</button>
        </div>
      </div>

      <div className="footer">
        <a href="#" className="terms" >
          Terms of Service
        </a>
        <a href="#" className="terms" >
          Privacy policy
        </a>
        <a href="#" className="terms" >
          Cookie Policy
        </a>
        <a href="#" className="terms" >
          Accessbility
        </a>
        <a href="#" className="terms" >
          Ads info
        </a>
        <a href="#" className="terms" >
          More ...
        </a>
        <a href="#" className="terms" >
          2023 X, Corp.
        </a>
      </div>
    </div>
  );
};

export default Right;


