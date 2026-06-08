import Landing from "./pages/Landing/Landing";
import Weeklymenu from "./pages/Subscription/Subscription"

import { Routes,Route } from "react-router-dom"

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LunchMenu from "./pages/WeeklyMenu/LunchMenu";
import DinnerMenu from "./pages/WeeklyMenu/DinnerMenu";
// import { Route } from "react-router-dom";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu/lunch" element={<LunchMenu />}/>
      <Route path="/menu/dinner" element={<DinnerMenu />}/>
      <Route path="/subscription" element={<Weeklymenu />} />
      
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    {/* <Landing /> */}
    </>
  );
}

export default App;