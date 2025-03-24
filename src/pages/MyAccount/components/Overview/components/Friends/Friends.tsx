import imgMasterChief from "../../../../../../assets/friends/420_master_chief.jpg";
import imgBowser from "../../../../../../assets/friends/bowser.jpg";
import imgBrotherBear from "../../../../../../assets/friends/brother_bear.jpg";
import imgDebIan from "../../../../../../assets/friends/deb_Ian.jpg";
import imgDwayneJohnson from "../../../../../../assets/friends/dwayne_johnson.jpg";
import imgHighGround from "../../../../../../assets/friends/high_ground_hater.jpg";
import imgHugo from "../../../../../../assets/friends/hugo.jpg";
import FriendCard from "./components/FriendCard/FriendCard";
import FriendCardMore from "./components/FriendCardMore/FriendCardMore";
import "./Friends.scss";

const Overview = () => {
  return (

      <div className="account-section" id="overview-friends">
        <h2 className="section-title">Friends</h2>
        <div className="section-body" id="overview-friends-content">
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


  );
};

export default Overview;
