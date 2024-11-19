/* eslint-disable react/no-unescaped-entities */
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { PiPhoneCallLight } from "react-icons/pi";


const Footer = () => {
  const position = [41.307163, 69.281239];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_card1">
            <h2 className="footer_title">Bog‘lanish</h2>
            {/* <div className="footer_location">
              <div className="footer_location_title">
                <FiClock className="footer_location_icon" />

                Ish vaqti
              </div>
              <p className="footer_location_text">
                Har kun <br /> soat 09:00 dan 18:00 gacha
              </p>
            </div> */}
            <div className="footer_location">
              <div className="footer_location_title">
                <MdOutlineLocationOn className="footer_location_icon" />

                Manzil
              </div>
              <p className="footer_location_text">
                Samarqand viloyati Samarqand shahri
                <br />
                Rudakiy koʻchasi 205-uy
              </p>
            </div>
            <div className="footer_social">
              <div className="footer_location">
                <div className="footer_location_title">
                  <PiPhoneCallLight className="footer_location_icon" />

                  Telefon
                </div>
                <p className="footer_location_text">
                  +998 66 230 00 00
                </p>
              </div>
              <div className="footer_icons">
                <a href="https://www.instagram.com/txtgroup.uzb" className="footer_icon">
                  <FaInstagram />
                </a>
                <a href="https://t.me/txtgroupuzb" className="footer_icon">
                  <FaTelegramPlane />
                </a>
                <a href="https://www.facebook.com/txtgroup.uzb" className="footer_icon">
                  <FaFacebookF />
                </a>
                <a href="#!" className="footer_icon">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_card2">
            <div >
              <iframe className="map_container" src="https://yandex.com/map-widget/v1/?um=constructor%3A29b7c40e7212795570a1fce17669e7ca58f49870a94b1add3cff7b8fda9fbe67&amp;source=constructor" width="591" height="488" frameborder="0"></iframe>
            </div>
          </div>
          <div className="footer_card3">
            <p className="footer_card3_text">
              © 2024 TXT Group. Barcha huquqlar himoyalangan.
            </p>
            <p className="footer_card3_text">
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
