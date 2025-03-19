import Footer from "../../components/Footer/Footer";
import Frame from "../../components/Frame/Frame";
import Content from "../../components/Content/Content";
import OrdersButton from "./components/OrdersButton/OrdersButton";
import "./MyAccount.scss";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./components/Overview/Overview";

const MyAccount = () => {
  return (
    <div id="my-account">
      <Frame>
        <Content>
          <Tabs>
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Details</Tab>
              <Tab>Orders</Tab>
            </TabList>

            <TabPanel>
              <Overview />
            </TabPanel>
            <TabPanel>
              <AccountDetails />
            </TabPanel>
            <TabPanel>
              <OrdersButton />
            </TabPanel>
          </Tabs>
        </Content>
        <Footer />
      </Frame>
    </div>
  );
};

export default MyAccount;
