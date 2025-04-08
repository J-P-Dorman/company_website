import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import imgBackground from '../../assets/background.jpg';
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Frame from "../../components/Frame/Frame";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import Orders from "./components/Orders/Orders";
import Overview from "./components/Overview/Overview";
import { orderData } from "./data";
import "./MyAccount.scss";

const MyAccount = () => {
  return (
    <div id="my-account" style={{backgroundImage: `url('${imgBackground}')`}}>
      <Frame>
        <Content>
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Account Details</Tab>
              <Tab>Orders</Tab>
            </TabList>

            <TabPanel>
              <Overview />
            </TabPanel>
            <TabPanel>
              <AccountDetails />
            </TabPanel>
            <TabPanel>
              <Orders orders={orderData} />
            </TabPanel>
          </Tabs>
        </Content>
        <Footer />
      </Frame>
    </div>
  );
};

export default MyAccount;
