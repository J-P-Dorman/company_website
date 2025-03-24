import { format } from "date-fns/fp";
import "./Order.scss";
import { OrderData } from "../../../../types";

type Props = {
  orderData: OrderData;
};

const Order = ({ orderData }: Props) => {
  const { id: orderId, date, address, items } = orderData;

  return (
    <div className="order">
      <div className="order-header">
        <div className="order-header-top">
          <h3 className="order-id">Order ID: #{orderId}</h3>
          <div className="order-date-time">
            <div className="order-date">{format("dd/MM/yyyy", date)}</div>
            <div className="order-time">{format("HH:mm", date)}</div>
          </div>
        </div>
        <div className="order-address">
          {address.map((line) => {
            return (
              <div key={line} className="address-line">
                {line}
              </div>
            );
          })}
        </div>
      </div>

      <div className="order-items">
        <h4 className="items-title">Items</h4>
        {items.map((item) => {
          const { id: itemId, name, image, details } = item;

          return (
            <div key={itemId} className="item">
              <div className="item-image">
                <img src={image} alt="product image" />
              </div>
              <div className="item-text">
                <div className="item-name">{name}</div>
                <div className="item-details">
                  {details.map((item) => {
                    const { label, value } = item;

                    return (
                      <div key={`${label}${value}`} className="item-detail">
                        <div className="detail-title">{label}:</div>
                        <div className="detail-value">{value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
