import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="container">
      <video className="video" autoPlay muted loop>
        <source
          src={require("../assets/videos/kegel_sticky.mp4")}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default MainContent;
