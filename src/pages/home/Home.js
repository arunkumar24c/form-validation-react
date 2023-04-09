import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Update from "../../components/update/Update";
import Rightbar from "../../components/rightbar/Rightbar";
import "../../pages/home/home.css"

const Home = () => {
  return (
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
          <Sidebar />
          <Update />
          <Rightbar />
        </div>
      </>
    </div>
  );
};

export default Home;
