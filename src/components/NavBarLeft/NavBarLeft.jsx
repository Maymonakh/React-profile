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
import { RiFileList2Line,RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import TitleBox from "./TitlesBoxes/TitleBox"; 

const NavBarLeft = () => {
  return (
    <div className="Left">
      <div className="Twittertitle-box">
        <FaTwitter className="TwitterLogo" />
      </div>
      <TitleBox icon={<BiHomeCircle className="icon" />} text="Home" />
      <TitleBox icon={<BiHash className="icon" />} text="Explore" />
      <TitleBox icon={<IoNotificationsOutline className="icon" />} text="notifications" />
      <TitleBox icon={<BiMessageSquareDetail className="icon" />} text="Message" />
      <TitleBox icon={<RiFileList2Line className="icon" />} text="Lists" />
      <TitleBox icon={<BiBookmark className="icon" />} text="Bookmarks" />
      <TitleBox icon={<RiContactsFill className="icon" />} text="Profile" />
      <TitleBox icon={<CgMoreO className="icon" />} text="More" />
      <button class="Post">Post</button>
      <div class="user">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
          alt=""
          class="user-img"
        />
        <div class="title-box-user-names">
          <p class="name">Maymona</p>
          <p class="user-name">@maymonakhanfar</p>
        </div>
        <CgMoreAlt class="cg" />
      </div>

    </div>
  );
};

export default NavBarLeft;

