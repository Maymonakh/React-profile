import React from "react";

const TagBox = ({ trending, tag, tweets }) => {
  return (
    <div class="tag-box">
      <p class="trending">{trending} . Trending</p>
      <h1 class="tag">{tag}</h1>
      <p class="tweets-tag">{tweets}</p>
    </div>
  );
};

export default TagBox;
