import React from "react";

const TitleBox = ({ icon, text }) => {
  return (
    <button class="title-box">
      {icon}
      <p class="text-navbar-left">{text}</p>
    </button>
  );
};

export default TitleBox;
