import { format, subMinutes } from "date-fns/fp";
import imgAGreatStart from "../../../../assets/achievements/a_great_start.jpg";
import imgBeachDweller from "../../../../assets/achievements/beach_dweller.jpg";
import imgBucketBane from "../../../../assets/achievements/bucket_bane.jpg";
import imgChatterbox from "../../../../assets/achievements/chatterbox.jpg";
import profilePicture from "../../../../assets/user.jpg";
import Button from "../../../../components/Button/Button";
import AchievementStub from "./components/AchievementStub/AchievementStub";
import "./Overview.scss";

const Overview = () => {
  const date = subMinutes(174, new Date());
  const day = format("dd/MM/yyyy", date);
  const hours = format("HH", date);
  const minutes = format("MM", date);
  const seconds = format("SS", date);

  return (
    <div id="overview">
      <div id="overview-user">
        <div id="overview-profile-picture">
          <img src={profilePicture} alt="profile picture" />
        </div>
        <div id="overview-name">
          <span id="overview-name-content">xXx_5kyW41k3R_xXx</span>
          {/* <span className="overview-title">User Tag</span> */}
        </div>
      </div>
      <div id="overview-topline-stats">
        <div className="overview-stat" id="overview-stat-achievements">
          <span className="overview-stat-content">26 / 40</span>
          <span className="overview-title">Achievements</span>
        </div>
        <div className="overview-stat" id="overview-stat-last-played">
          <span className="overview-stat-content">
            <span>{}</span>
            <span>{`${day} ${hours}:${minutes}:${seconds}`}</span>
          </span>

          <span className="overview-title">Last played</span>
        </div>
        <div className="overview-stat" id="overview-stat-hours-played">
          <span className="overview-stat-content">563</span>
          <span className="overview-title">Hours played</span>
        </div>
      </div>

      <hr />

      <div id="overview-achievements">
        <h2>Achievements</h2>
        <div id="overview-achievements-content">
          <div id="overview-achievement-stubs">
            <AchievementStub
              title="A Great Start"
              imgSrc={imgAGreatStart}
              description="Complete the tutorial"
            />
            <AchievementStub
              title="Chatterbox"
              imgSrc={imgChatterbox}
              description="Speak to NPCs more than 20 times"
            />
            <AchievementStub
              title="Bucket Bane"
              imgSrc={imgBucketBane}
              description="Knock over buckets 10 times"
            />
            <AchievementStub
              title="Beach Dweller"
              imgSrc={imgBeachDweller}
              description='Complete the level "Beach Town"'
            />
          </div>
          <Button type="button" onClick={() => {}} className="btn-primary">
            See All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
