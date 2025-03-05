import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div id="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <form>
        <Input label="Email:" />
        <Button
          className="btn-primary"
          onClick={() => {
            console.log("bwump");
          }}
          type="button"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
