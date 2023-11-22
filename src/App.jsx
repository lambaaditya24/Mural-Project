import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@mui/material/styles";

import { JournalProvider } from "./components/Utils/JournalContext";

import Login from "./components/Login/Login";
import AdminPortal from "./components/AdminPortal/AdminPortal";
import CrewMemberPortal from "./components/CrewMemberPortal/CrewMemberPortal";
import CrewChiefPortal from "./components/CrewChiefPortal/CrewChiefPortal";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <JournalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin-portal" element={<AdminPortal />}></Route>
          <Route
            path="/crew-chief-portal"
            element={<CrewChiefPortal />}
          ></Route>
          <Route
            path="/crew-member-portal"
            element={<CrewMemberPortal />}
          ></Route>
        </Routes>
      </Router>
    </JournalProvider>
  );
}

export default App;
