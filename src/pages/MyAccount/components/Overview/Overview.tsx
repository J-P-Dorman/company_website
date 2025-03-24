import AccountHeader from "./components/AccountHeader/AccountHeader";
import Achievements from "./components/Achievements/Achievements";
import Characters from "./components/Characters/Characters";
import Friends from "./components/Friends/Friends";

const Overview = () => {
  return (
    <div className="account-tab" id="overview">
      <AccountHeader />
      <Achievements />
      <Friends />
      <Characters />
    </div>
  );
};

export default Overview;
