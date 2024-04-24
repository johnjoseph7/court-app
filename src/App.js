import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ClientReg } from "./components/ClientReg";
import { LawyerReg } from "./components/LawyerReg";
import { ClientDashboard } from "./components/ClientDashboard";
import { LawyerDashboard } from "./components/LawyerDashboard";
import Chatbot from "./components/ChatBot";
import UserLogin from "./components/Userlogin";

import Epay, {
  Disclaimer,
  Ecommittee,
  Epay1,
  IndiaCode,
} from "./components/Epay";
import { Help } from "./components/Epay";
import { MyCase } from "./components/MyCase";
import {
  CaseTypeComponent,
  CustomComponent,
  FillingComponent,
  FirComponent,
  PartyComponent,
} from "./components/CustomComponent";
import { VerificationClient } from "./components/verify/VerificationClient";
import { VerificationLawyer } from "./components/verify/VerificationLawyer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/verificationClient" element={<VerificationClient/>} />
          <Route path="/verificationLawyer" element={<VerificationLawyer/>} />
          <Route path="/signin" element={<UserLogin />} />
          <Route path="/clientReg" element={<ClientReg />} />
          <Route path="/MyCase" element={<MyCase />} />
          <Route path="/clientDashboard" element={<ClientDashboard />} />
          <Route path="/lawyerDashboard" element={<LawyerDashboard />} />
          <Route path="/lawyerReg" element={<LawyerReg />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/paymentPage" element={<Epay />} />
          <Route path="/paymentPage1" element={<Epay1 />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Ecommittee" element={<Ecommittee />} />
          <Route path="/IndiaCode" element={<IndiaCode />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/case" element={<CustomComponent />} />
          <Route path="/filling" element={<FillingComponent />} />

          <Route path="/party" element={<PartyComponent />} />
          <Route path="/caseType" element={<CaseTypeComponent />} />
          <Route path="/fir" element={<FirComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
