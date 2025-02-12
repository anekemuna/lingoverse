import React, {useState} from "react";
import "./LandingPage.css";
import pic1 from "../assets/landing_pic1.jpeg";
import pic2 from "../assets/landing_pic2.jpeg";
import Login from "../components/Login.jsx";



const LandingPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className="landing-page">
      <div className="background-section"></div>
      <img className="image1" src={pic1} alt="pic1" />
      <div className="footer"></div>
      <img className="image2" src={pic2} alt="pic2" />

      <div className="header"></div>

      <div className="content-section">
        <div className="title">Unlock the Language of Today</div>
        <div className="description">
          Your ultimate guide to Gen Z slangs, gym lingo, music terms, and more.
          Stay updated and connected with the words that define modern culture.
        </div>
        <div className="button get-started" onClick={() => setPopupOpen(true)} >Get Started</div>
        <Login isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
      </div>

      <div className="explore-section">
        <div className="explore-title">Explore . Learn . Uncover .</div>
        <div className="explore-description">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Aa ad mus,
          consectetur ultricies nisl inceptos. Proin phasellus est metus maximus
          suspendisse purus semper. Nec condimentum vulputate parturient, cursus
          gravida placerat.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
