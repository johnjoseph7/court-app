import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ClientReg } from "./components/ClientReg";
import { LawyerReg } from "./components/LawyerReg";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/clientReg" element={<ClientReg />} />
          <Route path="/lawyerReg" element={<LawyerReg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;