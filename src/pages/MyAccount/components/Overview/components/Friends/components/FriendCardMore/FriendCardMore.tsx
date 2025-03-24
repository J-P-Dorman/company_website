import image from "../../../../../../../../assets/background_primary.jpg";
import Button from "../../../../../../../../components/Button/Button";
import "./FriendCardMore.scss";
import chevronRight from '../../../../../../../../assets/icons/chevron-right.svg';

type Props = {
  onClick: () => void;
};

const Overview = ({ onClick }: Props) => {
  return (
    <div className="friend-card-more">
      <Button type="button" className="btn-clear" onClick={onClick}>
        <div className="card" style={{ backgroundImage: `url("${image}")` }}>
          <div className="text">
            <span>See All</span>
            <img src={chevronRight} alt="chevron right" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Overview;
