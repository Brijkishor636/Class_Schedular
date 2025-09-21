import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuidePage from "./components/GuidePage";
import Homepage from "./Homepage/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import CreateTimeTable from "./pages/CreateTimeTable";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/login" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userdashboard" element={<UserDashboard/>}/>
        <Route path="/createtimetable" element={<CreateTimeTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}
