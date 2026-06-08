import Landing from "./pages/Landing/Landing";
import Weeklymenu from "./pages/Subscription/Subscription"

import { Routes,Route } from "react-router-dom"

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
<<<<<<< HEAD
import LunchMenu from "./pages/WeeklyMenu/LunchMenu";
import DinnerMenu from "./pages/WeeklyMenu/DinnerMenu";
=======
import Userdashboard from "./pages/Userdashboard/Userdashboard";
>>>>>>> 4b84adcdddd69a5fd158de967813e3bcaf9bf3b5
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
      <Route path="/user-dashboard" element={<Userdashboard/>}/>
    </Routes>

    {/* <Landing /> */}
    </>
  );
}

export default App;