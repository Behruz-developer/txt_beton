/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/universall2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Brilliant City turar-joy majmuasi Samarqand shahrining eng serqatnov koʻchalaridan birida joylashgan boʻlib, bu doim yangiliklar markazida boʻlishingizga yordam beradi.
            </p>
            <p className="location_text">
              Shahar markaziga yaqin boʻlishiga qaramay, loyiha hududi tinch va osoyishta. Yashil maydonlar va dam olish zonalari sizga shahar shovqinidan uzoqda yashash imkoniyatini beradi.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;
