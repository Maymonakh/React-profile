import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  return (
    <div className="Main">
      <div className="back-box-icon">
        <div className="box-user-name-back">
          <BiArrowBack className="back" />
          <div>
            <h1 className="react">React</h1>
            <p className="Tweets">2,611 Posts</p>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="user-img-box">
          <img
            className="user-img-g"
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
            alt="avatar"
          />
        </div>
      </div>

      <div className="follow-box">
        <CgMoreAlt className="more" />
        <input type="button" value="Following" classNameName="Following" />
      </div>

      <div className="user-box">
        <h1 className="name-user">React</h1>
        <p className="user-name-e">@reactjs</p>
        <p>The library for web and native user interfaces</p>
        <div className="dateBox">
          <CgCalendarDates />
          <p className="date">Joined July 2013</p>
        </div>
        <div className="following-followers">
          <span className="bold">267</span>
          <p className="following">Following</p>
          <span className="bold">708.1k</span>
          <p className="followers">Followers</p>
        </div>
      </div>

      <div className="TweetsBox">
        <div className="boxs">
          <button className="tweets">Posts</button>
          <div className="blue"></div>
        </div>
        <button className="btn">Replies</button>
        <button className="btn">Media</button>
        <button className="btn">Likes</button>
      </div>

      <Tweet
        comment="210"
        retweet="700"
        like="403"
        tweet="Welcome to React js."
      />
      <Tweet
        comment="51"
        retweet="580"
        like="120"
        tweet="Happy 10th birthday to @reactjs."
      />
      <Tweet comment="105" retweet="650" like="220" tweet="Hello." />
      <Tweet comment="654" retweet="670" like="825" tweet="Salam!" />
    </div>
  );
};

export default Main;
