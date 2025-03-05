import "./Footer.scss";
import companyLogo from "../../assets/logo.svg";
import iconBluesky from "../../assets/icons/bluesky.svg";
import iconDiscord from "../../assets/icons/discord.svg";
import iconFacebook from "../../assets/icons/facebook.svg";
import iconInstagram from "../../assets/icons/instagram.svg";
import iconThreads from "../../assets/icons/threads.svg";
import iconTiktok from "../../assets/icons/tiktok.svg";
import iconTwitch from "../../assets/icons/twitch.svg";
import iconYoutube from "../../assets/icons/youtube.svg";
import { Link } from "react-router";

const Home = () => {
  return (
    <div id="footer">
      <div className="width-wrapper">
        <div id="footer-top">
          <div id="footer-about" className="footer-links">
            <h3>About</h3>
            <div>
              <a className="small-link" href="#">
                About us
              </a>
            </div>
            <div>
              <a className="small-link" href="#">
                Careers
              </a>
            </div>
            <div>
              <a className="small-link" href="#">
                Contact us
              </a>
            </div>
          </div>
          <div id="footer-legal" className="footer-links">
            <h3>Legal</h3>
            <div>
              <a className="small-link" href="#">
                Accessibility Statement
              </a>
            </div>
            <div>
              <a className="small-link" href="#">
                Privacy Policy
              </a>
            </div>
            <div>
              <a className="small-link" href="#">
                Terms & conditions
              </a>
            </div>
          </div>
          <div id="footer-media" className="footer-links">
            <h3>Media</h3>
            <div>
              <a className="small-link" href="#">
                Blog
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div id="footer-bottom">
          <div id="footer-logo">
            <Link to="#">
              <img
                src={companyLogo}
                className="social-badge"
                alt="Games Company Logo"
              />
            </Link>
          </div>
          <div id="footer-socials">
            <Link to="#">
              <img
                src={iconBluesky}
                className="social-badge"
                alt="Bluesky logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconDiscord}
                className="social-badge"
                alt="Discord logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconFacebook}
                className="social-badge"
                alt="Facebook logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconInstagram}
                className="social-badge"
                alt="Instagram logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconThreads}
                className="social-badge"
                alt="Threads logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconTiktok}
                className="social-badge"
                alt="Tiktok logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconTwitch}
                className="social-badge"
                alt="Twitch logo"
              />
            </Link>
            <Link to="#">
              <img
                src={iconYoutube}
                className="social-badge"
                alt="Youtube logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
