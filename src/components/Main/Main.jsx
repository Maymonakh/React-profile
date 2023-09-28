import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  
  return (
    <div class="Main">
      <div class="back-box-icon">
        <div class="box-user-name-back">
          <BiArrowBack class="back" />
          <div>
            <h1 class="react">React</h1>
            <p class="Tweets">2,611 Posts</p>
          </div>
        </div>
      </div>
      <div class="header">
        <div class="user-img-box">
          <img
            class="user-img-g"
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
            alt="avatar"
          />
        </div>
      </div>

      <div class="follow-box">
        <CgMoreAlt class="more" />
        <input
          type="button"
          value= "Following"
          className= "Following" 
        />
      </div>

      <div class="user-box">
        <h1 class="name-user">React</h1>
        <p class="user-name-e">@reactjs</p>
        <p>The library for web and native user interfaces</p>
        <div class="dateBox">
          <CgCalendarDates />
          <p class="date">Joined July 2013</p>
        </div>
        <div class="following-followers">
          <span class="bold">267</span>
          <p class="following">Following</p>
          <span class="bold">708.1k</span>
          <p class="followers">Followers</p>
        </div>
      </div>

      <div class="TweetsBox">
        <div class="boxs">
          <button class="tweets">Posts</button>
          <div class="blue"></div>
        </div>
        <button class="btn">Replies</button>
        <button class="btn">Media</button>
        <button class="btn">Likes</button>
      </div>

      <Tweet comment="210" retweet="700" like="403" tweet="Welcome to React js."/>
      <Tweet comment="51" retweet="580" like="120" tweet="Happy 10th birthday to @reactjs." />
      <Tweet comment="105" retweet="650" like="220" tweet="Hello." />
      <Tweet comment="654" retweet="670" like="825" tweet="Salam!" />
    </div>
  );
};

export default Main;
