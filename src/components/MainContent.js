import React from "react";
import "./MainContent.css";
import useIsMobileView from "../hooks/useIsMobileView";

const MainContent = () => {
  const isMobileView = useIsMobileView();

  return (
    <div className="container">
      <video
        id={"video"}
        className={isMobileView ? "video-mobile" : "video"}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        src={`${process.env.PUBLIC_URL}/videos/kegel_sticky.mp4`}
        type="video/mp4"
      />
      <a className="madeBy" href={"https://planfit.sng.link/Al6s7/b4fm/wf79"}>
        made by
      </a>
    </div>
  );
};

export default MainContent;
