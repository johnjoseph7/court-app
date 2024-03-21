import React from "react";
import { useState } from "react";
import { SideBar } from "./SideBar";
import Chatbot from "./ChatBot";
import { Link } from "react-router-dom";
import { DashboardContent } from "./DashboardContent";
import { CNRPage } from "./CnrPage";
import { SearchLawyer } from "./SearchLqwyer";
import { MyCase } from "./MyCase";
import { FAQ } from "./FAQ";

export const LawyerDashboard = () => {
  const [active, setActive] = useState("");

  const handleElementClick = (elementName) => {
    setActive(elementName);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(128, 128, 128, 0.15)", height: "auto" }}
      >        
      <SideBar />
        <div
          className="top-head"
          style={{
            backgroundColor: "#e94545",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor:
                active === "caseStatus" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("caseStatus")}
          >
           <img src="assets\2634476.png" style={{ width: "30%" }}
              alt="Lawyer Logo"></img>            <br />
            <small className="case-caption">case status</small>
          </div>
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor:
                active === "selectLawyer" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("selectLawyer")}
          >
            <img
              src="assets/select lawyer logo.jpg"
              style={{ width: "30%" }}
              alt="Select Lawyer Logo"
            />
            <br />
            <small className="case-caption">select lawyer</small>
          </div>
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor: active === "myCases" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("myCases")}
          >
            <img
              src="assets/my cases logo.jpg"
              style={{ width: "33%" }}
              alt="My Cases Logo"
            />
            <br />
            <small className="case-caption">my cases</small>
          </div>
          <div
            className="case-status pt-2"
            style={{
              flex: "1",
              textAlign: "center",
              backgroundColor: active === "faq" ? "#ff5000" : "#80808052",
            }}
            onClick={() => handleElementClick("faq")}
          >
            <img
              src="assets/question logo.jpg"
              style={{ width: "30%" }}
              alt="Question Logo"
            />          
              <br />
            <small className="case-caption">FAQ's</small>
          </div>
        </div>
        {active === "caseStatus" && <DashboardContent />}
        {active === "" && <CNRPage />}
        {active === "selectLawyer" && <SearchLawyer />}        
        {active === "myCases" && <MyCase />}   
        {active === "faq" && <FAQ />}        
        <div className="col- mt-5 ">
          {/* <select
            name="cars"
            id="cars"
            style={{
              width: "40%",
              margin: "10px",
              backgroundColor: "#80808052",
            }}
          >
            <option value="volvo">Select court</option>
            <option value="volvo">Subordinate court</option>
            <option value="saab">High Courts</option>
            <option value="opel">Supreme Court</option>
          </select>
          <select
            name="cars"
            id="cars"
            style={{
              width: "40%",
              margin: "10px",
              backgroundColor: "#80808052",
            }}
          >
            <option value="volvo">Select bench</option>
            <option value="volvo">Division</option>
            <option value="saab">Full</option>
            <option value="opel">Constitutional</option>
          </select>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\case type logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>case number</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\party logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Party</h6>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\case type logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Filing Number</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                 src="assets\FIR DOCUMENT LOGO.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>FIR Number</h6>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\advocate logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Advocate</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\act logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Act</h6>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\case type logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Case type</h6>
            </div>
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets\hearing date logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Hearing Dates</h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-6 mb-1 custom-div text-center"
              style={{ backgroundColor: "#80808052" }}
            >
              <img
                src="assets/notofication logo.jpg"
                className="p-2"
                style={{ width: "50px" }}
              ></img>
              <h6>Notification</h6>
            </div>
          </div>
        </div>
        <div
          className="home-page"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
        >
          <Link to="/chatbot">
            <img
              src="assets\chatbot logo.jpg"
              style={{ width: "54px", float: "right" }}
            />
          // </Link>*/}
        </div> 
      </div>
    </>
  );
}
