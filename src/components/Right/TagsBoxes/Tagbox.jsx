import React from "react";

const TagBox = ({ trending, tag, tweets }) => {
  return (
    <div className="tag-box">
      <p className="trending">{trending} . Trending</p>
      <h1 className="tag">{tag}</h1>
      <p className="tweets-tag">{tweets}</p>
    </div>
  );
};

export default TagBox;
