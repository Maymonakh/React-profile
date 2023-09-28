import { GoVerified } from "react-icons/go";

const Channel = (props) => {
  return (
    <div>
      <div class="profile-box-container">
        <div class="profile-box-chanel">
          <img src={props.src} class="profile-chanel" alt={props.name} />
          <div class="names-user">
            <div class="very">
              <h1 class="users-names">{props.name}</h1>
              <GoVerified class="verified" />
            </div>
            <p class="user-name-is">{props.userName}</p>
          </div>
        </div>
        <div class="button-follow-box">
          <input
            value="Follow"
            type="button"
            class= "Follow_"
          />
        </div>
      </div>
    </div>
  );
};

export default Channel;
