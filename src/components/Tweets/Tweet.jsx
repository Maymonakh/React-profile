import { CgMoreAlt } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";

const Tweet = (props) => {
  return (
    <div>
      <div class="profile-user">
        <div class="profile-box">
          <div class="profile_"></div>
        </div>
        <div class="post-box">
          <div class="all">
            <div class="names">
              <h1>React</h1>
              <h1 class="name-user-r">@reactjs</h1>
              <h1 class="name-user-r">. Sep 22</h1>
            </div>
            <CgMoreAlt class="more-e" />
          </div>

          <div class="tweet-user">
            <p>{props.tweet}</p>
          </div>

          <div class="nav-icons-box">
            <div class="nav-icons">
              <div class="box">
                <FaRegComment />
                <p class="comment-tweet">{props.comment}</p>
              </div>
              <div class="box">
                <AiOutlineRetweet />
                <p class="comment-tweet">{props.retweet}</p>
              </div>

              <div class="box">
                <AiOutlineHeart />
                <p class="comment-tweet">{props.like}</p>
              </div>
              <SiGoogleanalytics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
