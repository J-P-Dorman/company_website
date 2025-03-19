import { format, subMinutes } from "date-fns/fp";
import imgAGreatStart from "../../../../assets/achievements/a_great_start.jpg";
import imgBeachDweller from "../../../../assets/achievements/beach_dweller.jpg";
import imgBucketBane from "../../../../assets/achievements/bucket_bane.jpg";
import imgChatterbox from "../../../../assets/achievements/chatterbox.jpg";
import imgMasterChief from "../../../../assets/friends/420_master_chief.jpg";
import imgBowser from "../../../../assets/friends/bowser.jpg";
import imgBrotherBear from "../../../../assets/friends/brother_bear.jpg";
import imgDebIan from "../../../../assets/friends/deb_Ian.jpg";
import imgDwayneJohnson from "../../../../assets/friends/dwayne_johnson.jpg";
import imgHighGround from "../../../../assets/friends/high_ground_hater.jpg";
import imgHugo from "../../../../assets/friends/hugo.jpg";
import profilePicture from "../../../../assets/user.jpg";
import Button from "../../../../components/Button/Button";
import AchievementStub from "./components/AchievementStub/AchievementStub";
import FriendCard from "./components/FriendCard/FriendCard";
import FriendCardMore from "./components/FriendCardMore/FriendCardMore";
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

      <div id="overview-friends">
        <h2>Friends</h2>
        <div id="overview-friends-content">
          <FriendCard
            name="High_Ground_Hater"
            description="Having some thoughts about sand..."
            image={imgHighGround}
            onClick={() => {}}
          />
          <FriendCard
            name="Master_Chief_420"
            description="Hardcore gamer, lone wolf. #basementlife"
            image={imgMasterChief}
            onClick={() => {}}
          />
          <FriendCard
            name="Brother_Bear"
            description="🎵 Tell everybody I'm on my way 🎵"
            image={imgBrotherBear}
            onClick={() => {}}
          />
          <FriendCard
            name="Bowser"
            description="Eating pasta rn 🍝"
            image={imgBowser}
            onClick={() => {}}
          />
          <FriendCard
            name="deb_Ian"
            description="Your distro is your life, Windows SUX."
            image={imgDebIan}
            onClick={() => {}}
          />

          <FriendCard
            name="Hugo"
            description="Buy my mixtape; https://tinyurl.com/yc5n67um"
            image={imgHugo}
            onClick={() => {}}
          />

          <FriendCard
            name="Dwayne_Johnson"
            description="..."
            image={imgDwayneJohnson}
            onClick={() => {}}
          />

          <FriendCardMore onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
