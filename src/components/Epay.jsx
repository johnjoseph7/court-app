import React from "react";
import { Link } from "react-router-dom";

const Epay = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 d-flex justify-content-center">
            <img
              src="assets\images.jpg"
              alt="logo"
              style={{ width: "76%", borderRadius: 22, height: 96 }}
            />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              src="assets\ind lo.webp"
              alt="loho"
              style={{ width: "59%", height: 100 }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h1 className="pt-2">ePAY</h1>
          </div>
        </div>
      </div>

      <p className="text-center">eCourts digital payments</p>
      <div className="row mb-2 justify-content-center">
        <button
          style={{ backgroundColor: "#35a7dc", borderRadius: "20px" }}
          className="col-8"
        >
          {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
          Count Fee
        </button>
      </div>

      <div className="row mb-2 justify-content-center">
        <button
          style={{ backgroundColor: "#35a7dc", borderRadius: "20px" }}
          className="col-8"
        >
          {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
          Fine
        </button>
      </div>

      <div className="row mb-2 justify-content-center">
        <button
          style={{ backgroundColor: "#35a7dc", borderRadius: "20px" }}
          className="col-8"
        >
          {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
          Penalty
        </button>
      </div>

      <div className="row mb-3 justify-content-center">
        <button
          style={{ backgroundColor: "#35a7dc", borderRadius: "20px" }}
          className="col-8"
        >
          {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
          Others
        </button>
      </div>

      <hr className="mt-2"></hr>

      <div className="row">
        <div className="col-6 mb-2">
          <button style={{ backgroundColor: "#35a7dc" }} className="col-12">
            {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
            DISTRICT COURT
          </button>
        </div>
        <div className="col-6 mb-2">
          <button style={{ backgroundColor: "#35a7dc" }} className="col-12">
            {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
            EXISTING CASE
          </button>
        </div>
        <div className="col-6">
          <button style={{ backgroundColor: "#35a7dc" }} className="col-12">
            {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
            HIGH COURT
          </button>
        </div>
        <div className="col-6">
          <button style={{ backgroundColor: "#35a7dc" }} className="col-12">
            {/* <img src="assets\round icon.jpg" style={{width:"20px", marginRight:"5px"}} /> */}
            NEW CASE
          </button>
        </div>
      </div>

      <div className="row justify-content-end mt-5">
        <Link
          to="/paymentPage1"
          className="btn btn-danger col-6"
          style={{ borderRadius: "60px" }}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export const Epay1 = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div className="row">
        <div className="col-md-4">
          <label for="state" style={{ fontWeight: "500" }}>
            State
          </label>
          <select
            id="state"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
            <option className="active">Select State</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </select>
        </div>
        <div className="col-md-4">
          <label for="district" style={{ fontWeight: "500" }}>
            District
          </label>
          <select
            id="district"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
            <option className="active">Select District</option>
            <option>Chennai</option>
            <option>Coimbatore</option>
            <option>Salem</option>
          </select>
        </div>
        <div className="col-md-4 col-">
          <label for="establishment" style={{ fontWeight: "500" }}>
            Establishment
          </label>
          <select
            id="establishment"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
            <option className="active">Select Establishment</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Amount"
            name="amount"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Mobile no"
            name="mobile ne"
          />
        </div>
      </div>
      <div class="mb-1 mt-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          I agree the terms and condition
        </label>
      </div>

      <div className="row justify-content-evenly mt-3">
        <Link to={'/paymentPage'} className="btn btn-primary col-4">Previous</Link>
        <Link to={'/clientDashboard'}className="btn btn-success col-4">SUBMIT</Link>
      </div>
    </div>
  );
};

export const Help = () => {
  return (
    <div className="container">
      <div
        className="tab mt-2 p-2 text-white"
        style={{ backgroundColor: "rgb(3 12 95) " }}
      >
        eCourts Servicess App Help
      </div>
      <ol style={{ paddingLeft: "20px" }}>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          eCourt Services App
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          Search by CNR Number
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          Search by Party Name
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          Search by Filing Number
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          Search by FIR Number
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          Search by Advocate
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          Search by Case Type
        </li>
        <li
          style={{
            marginBottom: "8px",
            padding: "10px",
            border: "1px  Solid Transpererr",
          }}
        >
          My Cases
        </li>
      </ol>
    </div>
  );
};
export const Ecommittee = () => {
  return (
    <div className="container">
      <h6>About e-Committee</h6>
      <p>
        The e-Committee, Supreme Court of India, welcomes you to this portal
        showcasing the Information and Communication Technology (ICT)
        initiatives adopted by the judicial system in India. The e-Committee is
        the governing body charged with overseeing the e-Courts Project
        conceptualized under the “National Policy and Action Plan for
        Implementation of Information and Communication Technology (ICT) in the
        Indian Judiciary-2005”. e-Courts is a pan India project monitored and
        funded by the Department of Justice, Ministry of Law and Justice,
        Government of India. Its vision is to transform the judicial system of
        the country by ICT enablement of courts.
      </p>
    </div>
  );
};

export const Disclaimer = () => {
  <div className="container">
    <h6>About e-Committee</h6>
    <p>
    The information collected and shown on "eCourts Services" mobile application is an online open-content information of cases of pending or disposed cases by District Court and Taluka Courts in India. This information is shared by respective Court establishments from their local servers. Therefore, information provided on this mobile application, at best, of a general nature and cannot substitute for the authentic verified information, i.e., by a competent authority designated by each Court. Please contact concerned Court or Authority for complete, accurate or reliable information and please verify genuiness, veracity and authenticity of the information shown on this website. That is not to say that you will not find valuable and accurate information through this mobile application.
    </p>
  </div>;
};

export default Epay;
