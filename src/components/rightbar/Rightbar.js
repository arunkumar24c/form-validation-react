
import React from "react";
import Widget from "./../widget/Widget";
import "../rightbar/right.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Widget type="user" />
        <Widget type="popular" />
        <Widget type="editor" />
        <button className="rightButton">
          <a
            href="https://www.speedyanswersnow.com/web?q=start%20web%20development&o=1670675&akid=1000001400spe149198621164kwd-299024870108&gclid=Cj0KCQjwocShBhCOARIsAFVYq0jtuJajyh_s-d9Yh9iYR38UHdpckONVQxLUJzhRxP4lioFjBGYiX3AaAhfCEALw_wcB&ueid=7270b5e1-283a-4c9c-890b-8babb1e162b3&qo=semQuery&ad=semA&ag=fw&an=google_s"
            target="_blank"
          >
            See More
          </a>
          <BsArrowDownCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
