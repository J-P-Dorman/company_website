import { format, subMinutes } from "date-fns/fp";
import profilePicture from "../../../../../../assets/user.jpg";
import "./AccountHeader.scss";

const AccountHeader = () => {
  const date = subMinutes(174, new Date());
  const day = format("dd/MM/yyyy", date);
  const hours = format("HH", date);
  const minutes = format("MM", date);
  const seconds = format("SS", date);

  return (
    <div className="account-section" id="overview-hero">
      <div id="overview-user">
        <div id="overview-profile-picture">
          <img src={profilePicture} alt="profile picture" />
        </div>
        <div id="overview-name">
          <span id="overview-name-content">xXx_5kyW41k3R_xXx</span>
        </div>
      </div>
      <div id="overview-topline-stats">
        <div className="overview-stat" id="overview-stat-achievements">
          <span className="overview-stat-content">26 / 40</span>
          <span className="overview-title">Achievements</span>
        </div>
        <div className="overview-stat" id="overview-stat-last-played">
          <span className="overview-stat-content">
            <span className="date">{day}</span>
            <span className="time">{`${hours}:${minutes}:${seconds}`}</span>
          </span>

          <span className="overview-title">Last played</span>
        </div>
        <div className="overview-stat" id="overview-stat-hours-played">
          <span className="overview-stat-content">563</span>
          <span className="overview-title">Hours played</span>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default AccountHeader;
