import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClientReg = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    place: ""
  });

  const [error, setError] = useState("");

  const users = [
    { name: "Varsha", ph_no: 1234567890 },
    { name: "Kayalvizhi", ph_no: 1234567890 }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleClick = () => {
    const { name, phoneNumber } = formData;
    const isValidUser = users.some(
      (user) => user.name === name && user.ph_no === parseInt(phoneNumber)
    );

    if (isValidUser) {
      navigate("/verificationClient");
    } else {
      setError("Invalid credentials. Please check your name and phone number.");
    }
  };

  return (
    <div className="container-fluid position-relative" style={{ height: "100vh" }}>
      <div className="triangle-top-left"></div>
      <div className="icon-top-left">
        <img
          src="assets\images.jpg"
          className="d-block"
          alt="court logo"
          style={{ width: "70px", borderRadius: "25px" }}
        ></img>
      </div>
      <div className="row mt-5 mb-5 justify-content-center align-item-center">
        <div className="col-12 col-md-6 col-lg-4 mt-3 mb-5">
          <div className="app-heading mb-3 mt-5 text-center">
            <h3>Registration Form</h3>
          </div>
          <div>
            <form>
              <div className="mb-1 ps-4 pe-4 pb-1 pt-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3 ps-4 pe-4 pb-1 pt-2">
                <label htmlFor="place" className="form-label">Place</label>
                <input
                  type="text"
                  className="form-control"
                  id="place"
                  value={formData.place}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {error && <div className="text-danger text-center mb-3">{error}</div>}
              <button
                type="button"
                className="btn btn-primary ms-4 mt-4 col-4"
                onClick={() => handleClick("clientDashboard")}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="triangle-bottom-right mt-2 "></div>
        </div>
      </div>
    </div>
  );
};
