import { OrderData } from "../../types";
import Order from "./components/Order/Order";
import "./Orders.scss";

type Props = {
  orders: OrderData[];
};

const Orders = ({ orders }: Props) => {
  return (
    <div id="orders">
      <div id="order-container">
        {orders.map((order) => {
          const { id } = order;
          return <Order key={id} orderData={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
