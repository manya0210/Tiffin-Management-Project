import Landing from "./pages/Landing/Landing";
import Weeklymenu from "./pages/Subscription/Subscritption";

import { Routes,Route } from "react-router-dom"
import Weeklymenulunch from "./pages/Weeklymenulunch/Weeklymenulunch";
import Weeklymenudinner from "./pages/Weeklymenudinner/Weeklymenudinner";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Userdashboard from "./pages/Userdashboard/Userdashboard";
// import { Route } from "react-router-dom";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/subscription" element={<Weeklymenu />} />
      <Route path="/subscription/lunch" element={<Weeklymenulunch/>} />
      <Route path="/subscription/dinner" element={<Weeklymenudinner/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/user-dashboard" element={<Userdashboard/>}/>
    </Routes>

    {/* <Landing /> */}
    </>
  );
}

export default App;