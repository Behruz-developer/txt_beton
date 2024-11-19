import { useState } from "react";
import room1 from "../../assets/images/2-honali1.jpg";
import room2 from "../../assets/images/2-honali2.jpg";
import room3 from "../../assets/images/2-honali3.jpg";
import room4 from "../../assets/images/3-honali1.jpg";
import room5 from "../../assets/images/3-honali2.jpg";
import room6 from "../../assets/images/3-honali3.jpg";
import room7 from "../../assets/images/4-honali1.jpg";
import room8 from "../../assets/images/4-honali2.jpg";
import room9 from "../../assets/images/4-honali3.jpg";



const Houses_plan = () => {
  const [activeNumber, setActiveNumber] = useState("Hammasi");

  const handleNumberClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="houses">
      <div className="container">
        <div className="houses_box">
          <div className="houses_card_top">
            <h2 className="houses_title">Xonadonlarning o‘ylangan rejalari</h2>
            <div className="houses_card_number">
              {["Hammasi", "2-xonali", "3-xonali", "4-xonali"].map((number) => (
                <p
                  key={number}
                  className={`houses_number ${
                    activeNumber === number ? "active" : ""
                  }`}
                  onClick={() => handleNumberClick(number)}
                >
                  {number}
                </p>
              ))}
            </div>
          </div>

          {/* Showing corresponding content based on activeNumber */}
          {activeNumber === "Hammasi" && (
            <div className="houses_card_bottom">
              <img src={room5} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room3} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room7} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "2-xonali" && (
            <div className="houses_card_bottom1">
              <img src={room1} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room2} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room3} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "3-xonali" && (
            <div className="houses_card_bottom2">
              <img src={room4} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room5} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room6} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "4-xonali" && (
            <div className="houses_card_bottom2">
              <img src={room7} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room8} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={room9} alt="" className="houses_img" />
            </div>
          )}

          {/* You can continue adding more conditions for "3-xonali", "4-xonali", etc. */}
        </div>
      </div>
    </div>
  );
};

export default Houses_plan;
