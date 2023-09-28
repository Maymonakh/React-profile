import React from "react";

const TitleBox = ({ icon, text }) => {
  return (
    <button className="title-box">
      {icon}
      <p className="text-navbar-left">{text}</p>
    </button>
  );
};

export default TitleBox;
