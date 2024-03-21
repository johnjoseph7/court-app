import React from "react";
import { Link } from "react-router-dom";

export const CNRPage = () => {
  return (
    <>
      <div className="col- mt-3 mb-4 d-flex align-items-center justify-content-center">
        <div className="input-group" style={{ width: "60%" }}>
          <input
            type="text"
            name="bench"
            id="bench"
            placeholder="Search by CNR"
            className="form-control"
            style={{
              backgroundColor: "#80808052",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <button
            className="btn btn-outline-secondary"
            style={{
              backgroundColor: "#80808052",
            }}
            type="button"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", position: "relative" }}>
        <hr style={{ width: "100%", borderTop: "1px solid #000" }} />
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "0 20px",
          }}
        >
          or
        </span>
      </div>
      <div class="qr-container">
        <div class="qr-img">
          <img
            src="assets\QR.png"
            alt="Dummy QR Code"
            style={{ width: "18px" }}
          />
          <span>scan QR code</span>
        </div>
      </div>

      <div class="container-fluid mt-4">
        <div class="row">
          <ol class="list-unstyled">
            <li>
              <small>
                Understanding how algorithms work in content recommendation
                systems can be insightful
              </small>
            </li>
            <li>
              <small>
                Understanding how algorithms work in content recommendation
                systems can be insightful
              </small>
            </li>
            <li>
              <small>
                Understanding how algorithms work in content recommendation
                systems can be insightful
              </small>
            </li>
            <li>
              <small>
                Understanding how algorithms work in content recommendation
                systems can be insightful
              </small>
            </li>
            <li>
              <small>
                Understanding how algorithms work in content recommendation
                systems can be insightful
              </small>
            </li>
          </ol>
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
            alt="cgar"
          />
        </Link>
      </div>
    </>
  );
};
