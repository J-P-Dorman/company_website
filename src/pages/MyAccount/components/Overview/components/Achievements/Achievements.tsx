import imgAGreatStart from "../../../../../../assets/achievements/a_great_start.jpg";
import imgBeachDweller from "../../../../../../assets/achievements/beach_dweller.jpg";
import imgBucketBane from "../../../../../../assets/achievements/bucket_bane.jpg";
import imgChatterbox from "../../../../../../assets/achievements/chatterbox.jpg";
import Button from "../../../../../../components/Button/Button";
import AchievementStub from "./components/AchievementStub/AchievementStub";
import "./Achievements.scss";

const Achievements = () => {
  return (
    <div className="account-section" id="overview-achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="section-body" id="overview-achievements-content">
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
  );
};

export default Achievements;
