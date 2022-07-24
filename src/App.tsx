import React from 'react';
import logo from './logo.svg';
import './App.css';
import SigninForm from './Components/SigninForm';
import ChangePassword from './Components/ChangePassword';
import UserDashboard from './Components/UserDashboard';
import EmployeeRecords from './Components/EmployeeRecords';
import AttendanceTable from './Components/AttendanceTable';
import {BrowserRouter,Routes, Route, Link, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <SigninForm/> */}
      {/* <ChangePassword/> */}
      {/* <UserDashboard/> */}
      {/* <AttendanceTable/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/employeerecords" element={ <EmployeeRecords/>}/>
      <Route path="/userdashboard" element={ <UserDashboard/>}/>
              </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
