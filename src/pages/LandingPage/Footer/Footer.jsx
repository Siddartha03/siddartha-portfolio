// import { TextField } from "@mui/material";
// import ButtonComp from "../../../components/ButtonComp/ButtonComp";
import { contactInfo } from "../../../data/footer";
// import { useInView } from "react-intersection-observer";
import cx from "classnames";
import { WhatsApp } from "@mui/icons-material";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.scss";

const Footer = () => {
  // const [footer, inViewFooter] = useInView({ threshold: 0 });
  return (
    <div className="footer-container">
      {/* <div className="footer-container__detail" ref={footer}>
        <div
          className={cx(
            "footer-container__detail--info",
            inViewFooter && "footer-animation-first"
          )}
        >
          <strong className="footer-container__detail--compony-name">
            Madhuvan Digitals
          </strong>
          <p>
            At Madhuvan Digitals, our unwavering commitment revolves around two
            core pillars: Quality and Client Satisfaction. We are more than just
            a company; we are your dedicated partners in the world of
            Information Technology.
          </p>
          <h5>
            © {new Date().getFullYear()}. All rights reserved by Madhuvan
            Digitals inc.
          </h5>
        </div>
        <div
          className={cx(
            "footer-container__detail--info",
            inViewFooter && "footer-animation-sec"
          )}
        >
          <strong>Service</strong>
          <span>Web Application</span>
          <span>Mobile Application</span>
          <span>UX Desgin</span>
          <span>CMS Web Application</span>
          <span>Logo Design</span>
        </div>
        <div
          className={cx(
            "footer-container__detail--info",
            inViewFooter && "footer-animation-third"
          )}
        >
          <strong>Company</strong>
          <span>Serives</span>
          <span>Our Team</span>
          <span>Portfolio</span>
          <span>Blog</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div
          className={cx(
            "footer-container__detail--info",
            inViewFooter && "footer-animation-fourth"
          )}
        >
          <strong>Join with us</strong>
          <div className="footer-container__detail--input">
            <div>
              <TextField
                id="eamil"
                size="small"
                variant="outlined"
                label="email"
                aria-describedby="phoneNumber-helper-text"
                helperText={false && "Incorrect entry."}
              />
              <ButtonComp text="Subscribe" />
            </div>
          </div>
          <div className="footer-container__detail--social-media-logos">
            <a
              href="https://www.facebook.com/profile.php?id=61551970517773"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              href="https://www.instagram.com/madhuvandigitalstech/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/madhuvandigital"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div> */}
      <hr />
      <div className={cx("footer-container__contact")}>
        <strong>
          <a href="https://goo.gl/maps/9RhJNJPY2LqWMBBw6" target="_blank" rel="noreferrer">
            My Current Location
          </a>
        </strong>
        <div className="footer-container__contact--detail">
          {contactInfo.map((item, index) => (
            <div key={index}>
              <img src={item.icon} alt="" width="18" />
              <span>{item.text}</span>
            </div>
          ))}
          <a
            href="//api.whatsapp.com/send?phone=917287992262&text=Hi Siddartha"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <WhatsApp />
              Click to Whatsapp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
