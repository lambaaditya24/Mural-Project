// import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login/Login'
import AdminPortal from './components/AdminPortal/AdminPortal';
import CrewMemberPortal from './components/CrewMemberPortal/CrewMemberPortal';
import '@mui/material/styles';
import CrewChiefPortal from './components/CrewChiefPortal/CrewChiefPortal';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/admin-portal" element={<AdminPortal />}>
        </Route>
        <Route path="/crew-chief-portal" element={<CrewChiefPortal />}>
        </Route>
        <Route path="/crew-member-portal" element={<CrewMemberPortal />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
