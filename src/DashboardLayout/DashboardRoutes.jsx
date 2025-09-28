import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import UserComponent from "../components/UserComponent";
import Mytimetable from "../pages/Mytimetable";
import SubstituteManagement from "../components/SubstituteManagement";
import LeaveManagement from "../components/LeaveManagement";
import Users from "../components/Users";
import Schedule from "../components/Schedule";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<UserComponent />} />
        <Route path="mytimetable" element={<Mytimetable />} />
        <Route path="substitutions" element={<SubstituteManagement/>}/>
        <Route path="leave" element={<LeaveManagement/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="schedule" element={<Schedule/>}/>
      </Route>
    </Routes>
  );
}
