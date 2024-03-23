import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ handleElementClick, active, setActive }) => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideBar, setSideBar] = useState("");
  const toggleOffcanvas = () => {
    setShowSidebar(!showSidebar);
  };

  const menuItems = [
    { title: "Home", icon: "fas fa-home" },
    { title: "My Cases", icon: "fas fa-briefcase" },
    { title: "ePayments", icon: "fas fa-credit-card" },
    { title: "India Code", icon: "fas fa-gavel" },
    { title: "eCommitee", icon: "fa-solid fa-users-rectangle" },
    { title: "Virtual Courts", icon: "fas fa-gavel" },
    { title: "Help", icon: "fa-solid fa-hand-holding-hand" },
    { title: "ePrivacy Policy", icon: "fa-solid fa-user-lock" },
    { title: "Disclaimer", icon: "fa-solid fa-file-code" },
  ];

  return (
    <>
      <div className="top-head" style={{ backgroundColor: "#a00ae1" }}>
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
          onClick={toggleOffcanvas}
          style={{ backgroundColor: "80808052" }}
        >
          <i className="fa-solid fa-bars fs-3"></i>
        </button>
        <span className="me-2">
          <img
            src="assets/images.jpg"
            className="d-block"
            alt="court logo"
            style={{ width: "32px", borderRadius: "10px" }}
          />
        </span>
        <span className="me-2">
          <i className="fa-solid fa-share-nodes fs-3"></i>
        </span>
      </div>

      <div
        className={`offcanvas offcanvas-start ${showSidebar ? "show" : ""}`}
        style={{
          width: "200px",
          maxWidth: "80%",
          marginTop: "40px",
          backgroundColor: "80808052",
          height: "fit-content",
        }}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header p-0">
          <h6
            className="offcanvas-title ps-3 pt-1"
            id="offcanvasScrollingLabel"
          >
            ecourts services
          </h6>
        </div>
        <div className="offcanvas-body p-0 pt-2">
          <ul className="list-group">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`list-group-item custom-li ${
                  active === item.title ? "active" : ""
                }`}
                onClick={() => {
                  setShowSidebar(false);
                  handleElementClick(item.title);
                  if (item.title === "ePayments") navigate("/paymentPage");
                }}
              >
                <i
                  className={`fas ${item.icon}`}
                  style={{ marginRight: "5px" }}
                ></i>{" "}
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
