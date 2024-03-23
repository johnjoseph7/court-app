import React from 'react'
import { Link } from 'react-router-dom'

export const CustomComponent = () => {
  return (
    <>
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
        backgroundColor: "#80808052",
      }}
    >
      <h4 className="text-white">Ecourts Services</h4>
    </div>
  </div>
    <div
    className="container-fluid"
    style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
  >
    <div className="row">
      <div className="col-md-4">
        <label for="state" style={{ fontWeight: "500" }}>
          Court Complex
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
        Case Type
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
      <div className="col-md-4">
        <label for="district" style={{ fontWeight: "500" }}>
        Case Number
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

      <div className="col-md-4">
        <label for="year">Year</label>
        <input
          type="text"
          className="form-control mt-2 me-2 mb-1"
          style={{ width: "250px" }}
          placeholder="Enter Party name"
          name="party name"
        />
      </div>
    </div>

    <div className="row justify-content-evenly mt-3">
      <Link to={"/paymentPage"} className="btn btn-primary col-4">
        Go
      </Link>
      <Link to={"/clientDashboard"} className="btn btn-success col-4">
        RESET
      </Link>
    </div>
  </div>
    </>
  )
}


export const PartyComponent = () => {
    return (
      <>
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
          backgroundColor: "#80808052",
        }}
      >
        <h4 className="text-white">Ecourts Services</h4>
      </div>
    </div>
      <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div className="row">
        <div className="col-md-4">
          <label for="state" style={{ fontWeight: "500" }}>
            Court Complex
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
          Petitioner/Respontent
          </label>
          <input
            id="party name"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
          </input>
        </div>
  
        <div className="col-md-4">
          <label for="year"> Registation Year</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
      </div>
  
      <div className="row justify-content-evenly mt-3">
        <Link to={"/paymentPage"} className="btn btn-primary col-4">
          Go
        </Link>
        <Link to={"/clientDashboard"} className="btn btn-success col-4">
          RESET
        </Link>
      </div>
    </div>
      </>
    )
  }

  export const FillingComponent = () => {
    return (
      <>
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
          backgroundColor: "#80808052",
        }}
      >
        <h4 className="text-white">Ecourts Services</h4>
      </div>
    </div>
      <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div className="row">
        <div className="col-md-4">
          <label for="state" style={{ fontWeight: "500" }}>
            Court Complex
          </label>
          <select
            id="state"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
            <option className="active">Select court complex</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </select>
        </div>
       
        <div className="col-md-4">
          <label for="year"> Filling Number</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
        <div className="col-md-4">
          <label for="year"> Registation Year</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
      </div>
  
      <div className="row justify-content-evenly mt-3">
        <Link to={"/paymentPage"} className="btn btn-primary col-4">
          Go
        </Link>
        <Link to={"/clientDashboard"} className="btn btn-success col-4">
          RESET
        </Link>
      </div>
    </div>
      </>
    )
  }

  export const FirComponent = () => {
    return (
      <>
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
          backgroundColor: "#80808052",
        }}
      >
        <h4 className="text-white">Ecourts Services</h4>
      </div>
    </div>
      <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div className="row">
        <div className="col-md-4">
          <label for="state" style={{ fontWeight: "500" }}>
            Court Complex
          </label>
          <select
            id="state"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
            <option className="active">Select court complex</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </select>
        </div>
       
        <div className="col-md-4">
          <label for="year"> Filling Number</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
        <div className="col-md-4">
          <label for="year"> Registation Year</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
      </div>
  
      <div className="row justify-content-evenly mt-3">
        <Link to={"/paymentPage"} className="btn btn-primary col-4">
          Go
        </Link>
        <Link to={"/clientDashboard"} className="btn btn-success col-4">
          RESET
        </Link>
      </div>
    </div>
      </>
    )
  }

  export const CaseTypeComponent = () => {
    return (
      <>
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
          backgroundColor: "#80808052",
        }}
      >
        <h4 className="text-white">Ecourts Services</h4>
      </div>
    </div>
      <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.15)" }}
    >
      <div className="row">
        <div className="col-md-4">
          <label for="state" style={{ fontWeight: "500" }}>
            Court Complex
          </label>
          <select
            id="state"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "220px" }}
          >
            <option className="active">Select court complex</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </select>
        </div>
       
        <div className="col-md-4">
          <label for="year">case Type</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
        <div className="col-md-4">
          <label for="year"> Registation Year</label>
          <input
            type="text"
            className="form-control mt-2 me-2 mb-1"
            style={{ width: "250px" }}
            placeholder="Enter Party name"
            name="party name"
          />
        </div>
      </div>
  
      <div className="row justify-content-evenly mt-3">
        <Link to={"/paymentPage"} className="btn btn-primary col-4">
          Go
        </Link>
        <Link to={"/clientDashboard"} className="btn btn-success col-4">
          RESET
        </Link>
      </div>
    </div>
      </>
    )
  }