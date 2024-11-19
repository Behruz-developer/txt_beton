// /* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import universal from "../../assets/images/form.jpg";
import { useEffect } from "react";
import { useRef } from "react";

const Company = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
          animateNumber(0, 2357, 1000, setNumber1);
          animateNumber(0, 188430, 1000, setNumber2);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);
  const animateNumber = (start, end, duration, setNumber) => {
    const increment = (end - start) / (duration / 1);
    let currentNumber = start;

    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= end) {
        setNumber(end);
        clearInterval(timer);
      } else {
        setNumber(Math.round(currentNumber));
      }
    }, 1);
  };
  return (
    <div className="company" >
      <div className="container">
        <div className="company_box">
          <div className="company_card">
            <div className="company_card_top">
              <h2 className="company_title">Quruvchi kompaniya to‘g‘risida</h2>
              <p className="company_text">
                Xurshid Turayev boshchiligidagi TXT Group yirik va zamonaviy qurilish kompaniyasi boʻlib, Oʻzbekistonning 10 dan ortiq tuman va shaharlarida turar-joy majmualari barpo etgan. Kompaniya 2011-yilda tashkil etilgan va shu vaqt ichida ishonchli hamda samarali hamkor sifatida tanilgan.
              </p>
              <p className="company_text">
                Har bir loyiha biz uchun nafaqat biznes, balki oʻz mijozlarimizga eng yaxshi yashash sharoitlarini taqdim etish imkoniyatidir.
              </p>

            </div>

          </div>
          <div className="company_card_img">
            <img src={universal} alt="" className="company_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
