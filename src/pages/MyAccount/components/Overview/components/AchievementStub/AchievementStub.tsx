import "./AchievementStub.scss";

type Props = {
  imgSrc: string;
  title: string;
  description: string;
};

const AchievementStub = ({ imgSrc, title, description }: Props) => {
  return (
    <div className="achievement-stub">
      <div className="achievement-stub-image">
        <img src={imgSrc} alt="achievement image" />
      </div>
      <div className="achievement-stub-text">
        <div className="achievement-stub-title">{title}</div>
        <div className="achievement-stub-description">{description}</div>
      </div>
    </div>
  );
};

export default AchievementStub;
