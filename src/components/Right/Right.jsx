import React from "react";
import "./Right.css";
import { BiSearch } from "react-icons/bi";
import Channel from "../channels/channel";
import TagBox from "./TagsBoxes/Tagbox"; 


const Right = () => {
  return (
    <div class="right">
      <div class="box-search">
        <input type="text" class="search" placeholder="Search " />
        <BiSearch class="search-icon" />
      </div>

      <div class="might-box">
        <div class="might">
          <h1 class="might-like">You might like</h1>
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
          <button class="show-more">Show more</button>
        </div>
      </div>

      <div class="trends-box">
        <div class="trends">
          <div class="row">
            <h1 class="header-text">Trends for you</h1>
          </div>
          <TagBox trending="1" tag="#Reactjs" tweets="430.2k Tweets" />
          <TagBox trending="2" tag="#programming" tweets="150.2k Tweets" />
          <TagBox trending="3" tag="#frontend" tweets="130.2k Tweets" />
          <button class="show-more">Show more</button>
        </div>
      </div>

      <div class="footer">
        <a href="#" class="terms" >
          Terms of Service
        </a>
        <a href="#" class="terms" >
          Privacy policy
        </a>
        <a href="#" class="terms" >
          Cookie Policy
        </a>
        <a href="#" class="terms" >
          Accessbility
        </a>
        <a href="#" class="terms" >
          Ads info
        </a>
        <a href="#" class="terms" >
          More ...
        </a>
        <a href="#" class="terms" >
          2023 X, Corp.
        </a>
      </div>
    </div>
  );
};

export default Right;


