import Button from "../../../../components/Button/Button";
import "./OrdersButton.scss";
import chevronRight from "../../../../assets/icons/chevron-right.svg";
import shoppingCart from "../../../../assets/icons/shopping-cart.svg";

const OrdersButton = () => {
  return (
    <div id="orders-button">
      <Button
        className="btn-clear"
        onClick={() => {
          console.log("bwump");
        }}
        type="button"
      >
        <div className="left">
          <div className="image">
            <img src={shoppingCart} />
          </div>
          <div className="title">My Orders</div>
        </div>

        <div className="right">
          <div className="chevron">
            <img src={chevronRight} />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default OrdersButton;
