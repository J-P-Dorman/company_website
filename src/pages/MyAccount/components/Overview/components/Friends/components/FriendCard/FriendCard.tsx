import Button from "../../../../../../../../components/Button/Button";
import "./FriendCard.scss";

type Props = {
  image: string;
  name: string;
  description: string;
	onClick: () => void;
};

const Overview = ({ image, name, description, onClick }: Props) => {
  return (
    <div className="friend-card">
			<Button type="button" className="btn-clear"  onClick={onClick}>
			<div className="card">
        <div className="background-image" style={{ backgroundImage: `url("${image}")` }}>
     
          </div> 
        <div className="friend-text">
          <div className="friend-name">{name}</div>
          <div className="friend-description">{description}</div>
        </div>
      </div>
			</Button>
  
    </div>
  );
};

export default Overview;
