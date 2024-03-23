import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ClientReg } from "./components/ClientReg";
import { LawyerReg } from "./components/LawyerReg";
import { ClientDashboard } from "./components/ClientDashboard";
import { LawyerDashboard } from "./components/LawyerDashboard";
import Chatbot from "./components/ChatBot";
import UserLogin from "./components/Userlogin";
import { Verification } from "./components/Verification";
import Epay, { Disclaimer, Ecommittee, Epay1 } from "./components/Epay";
import { Help } from "./components/Epay";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/verification" element= {<Verification/>}/>
          <Route path="/signin" element={<UserLogin />} />
          <Route path="/clientReg" element={<ClientReg />} />
          <Route path="/clientDashboard" element={<ClientDashboard />} />
          <Route path="/lawyerDashboard" element={<LawyerDashboard/>} /> 
          <Route path="/lawyerReg" element={<LawyerReg />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/paymentPage" element={<Epay/>} />
          <Route path="/paymentPage1" element={<Epay1/>} />
          <Route path='/Help' element={<Help/>} />
          <Route path='/Ecommittee' element={<Ecommittee/>} />
          <Route path='/Disclaimer' element={<Disclaimer/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;