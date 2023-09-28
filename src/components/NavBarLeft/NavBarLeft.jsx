import React from "react";
import "./NavBarLeft.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHash,
  BiHomeCircle,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import TitleBox from "./TitlesBoxes/TitleBox";

const NavBarLeft = () => {
  return (
    <div classNameName="Left">
      <div classNameName="Twittertitle-box">
        <FaTwitter classNameName="TwitterLogo" />
      </div>
      <TitleBox icon={<BiHomeCircle classNameName="icon" />} text="Home" />
      <TitleBox icon={<BiHash classNameName="icon" />} text="Explore" />
      <TitleBox
        icon={<IoNotificationsOutline classNameName="icon" />}
        text="notifications"
      />
      <TitleBox
        icon={<BiMessageSquareDetail classNameName="icon" />}
        text="Message"
      />
      <TitleBox icon={<RiFileList2Line classNameName="icon" />} text="Lists" />
      <TitleBox icon={<BiBookmark classNameName="icon" />} text="Bookmarks" />
      <TitleBox icon={<RiContactsFill classNameName="icon" />} text="Profile" />
      <TitleBox icon={<CgMoreO classNameName="icon" />} text="More" />
      <button className="Post">Post</button>
      <div className="user">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
          alt=""
          className="user-img"
        />
        <div className="title-box-user-names">
          <p className="name">Maymona</p>
          <p className="user-name">@maymonakhanfar</p>
        </div>
        <CgMoreAlt className="cg" />
      </div>
    </div>
  );
};

export default NavBarLeft;
