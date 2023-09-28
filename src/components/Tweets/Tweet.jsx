import { CgMoreAlt } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";

const Tweet = (props) => {
  return (
    <div>
      <div className="profile-user">
        <div className="profile-box">
          <div className="profile_"></div>
        </div>
        <div className="post-box">
          <div className="all">
            <div className="names">
              <h1>React</h1>
              <h1 className="name-user-r">@reactjs</h1>
              <h1 className="name-user-r">. Sep 22</h1>
            </div>
            <CgMoreAlt className="more-e" />
          </div>

          <div className="tweet-user">
            <p>{props.tweet}</p>
          </div>

          <div className="nav-icons-box">
            <div className="nav-icons">
              <div className="box">
                <FaRegComment />
                <p className="comment-tweet">{props.comment}</p>
              </div>
              <div className="box">
                <AiOutlineRetweet />
                <p className="comment-tweet">{props.retweet}</p>
              </div>

              <div className="box">
                <AiOutlineHeart />
                <p className="comment-tweet">{props.like}</p>
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
