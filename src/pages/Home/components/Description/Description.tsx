import "./Description.scss";
import screenShot2 from "../../../../assets/screenshot_2.png";

const Description = () => {
  return (
    <div id="description">
      <div className="description-section">
        <div className="description-section-text">
          <h2>Welcome to our website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            ipsum eget nisi fringilla, vel consectetur mauris tempus. Vestibulum
            tincidunt ligula vel neque vestibulum, id commodo nunc dictum.
            Integer rutrum, lectus non pellentesque eleifend, mauris nunc semper
            velit, et ultricies velit velit in velit.
          </p>
        </div>
        <div className="description-section-image">
          <img src={screenShot2} />
        </div>
      </div>
      <hr />
      <div className="description-section">
        <div className="description-section-image">
          <img src={screenShot2} />
        </div>
        <div className="description-section-text">
          <h2>Welcome to our website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            ipsum eget nisi fringilla, vel consectetur mauris tempus. Vestibulum
            tincidunt ligula vel neque vestibulum, id commodo nunc dictum.
            Integer rutrum, lectus non pellentesque eleifend, mauris nunc semper
            velit, et ultricies velit velit in velit.
          </p>
        </div>
      </div>
      <hr />
      <div className="description-section">
        <div className="description-section-text">
          <h2>Welcome to our website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            ipsum eget nisi fringilla, vel consectetur mauris tempus. Vestibulum
            tincidunt ligula vel neque vestibulum, id commodo nunc dictum.
            Integer rutrum, lectus non pellentesque eleifend, mauris nunc semper
            velit, et ultricies velit velit in velit.
          </p>
        </div>
        <div className="description-section-image">
          <img src={screenShot2} />
        </div>
      </div>
    </div>
  );
};

export default Description;
