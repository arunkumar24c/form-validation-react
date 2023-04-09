import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../widget/widget.css";

const Widget = ({ type }) => {
  const { currentUser } = useContext(AuthContext);
  const title =
    type === "user"
      ? "Reccomended for " + currentUser.displayName
      : type === "popular"
      ? "Popular on DesignMediaX"
      : "Editor's choice";

  const img =
    type === "user"
      ? "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
      : type === "popular"
      ? "https://media.istockphoto.com/id/507880063/photo/he-has-a-clear-vision-for-the-company.jpg?s=1024x1024&w=is&k=20&c=F6Pxh0Di9VsMide3nCA7SIq7i21cnHhzjh2_Z2XxLIU="
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdISnBxWdg52goxCP6Isci4sOGm_xNX048V0gXD7i6b9YJd0lE9bTPFYytLRwU7UijDZg&usqp=CAU";

  return (
    <div className="widget">
      <span className="rightTitle">{title}</span>
      <img className="rightImg" src={img} alt="" />
    </div>
  );
};

export default Widget;
