import { GoVerified } from "react-icons/go";

const Channel = (props) => {
  return (
    <div>
      <div className="profile-box-container">
        <div className="profile-box-chanel">
          <img src={props.src} className="profile-chanel" alt={props.name} />
          <div className="names-user">
            <div className="very">
              <h1 className="users-names">{props.name}</h1>
              <GoVerified className="verified" />
            </div>
            <p className="user-name-is">{props.userName}</p>
          </div>
        </div>
        <div className="button-follow-box">
          <input value="Follow" type="button" className="Follow_" />
        </div>
      </div>
    </div>
  );
};

export default Channel;
