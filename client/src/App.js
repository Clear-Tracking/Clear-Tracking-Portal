import logo from './logo.svg';
import './App.css';
import SignUp from './pages/UserSide/SignUp';
// import PoliceLogin from './pages/PoliceLogin';
import Login from './pages/UserSide/Login';
// import Dashboard from './pages/Dashboard';
// import Form from './pages/Form';
// import ScanFace from './pages/ScanFace';
import PoliceDashboard from './pages/PoliceDashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboarddatabase from './pages/dashboardPages/Dashboarddatabase';
import Dashboardmain from './pages/dashboardPages/Dashboardmain';
import ScanFace from './pages/dashboardPages/ScanFace';
import RegisteredCasesDisplay from './pages/dashboardPages/RegisteredCasesDisplay';
import PoliceProfile from './pages/dashboardPages/PoliceProfile';
import UserSubmittedData from './pages/dashboardPages/UserSubmittedData';
import Launchedfirdata from './pages/dashboardPages/LaunchedFirData';
import UserApplication from './pages/UserSide/UserApplication';
import UserHome from './pages/UserSide/UserDashboardPages/UserHome';
import MissingPersonProfile from './pages/UserSide/UserDashboardPages/MissingPersonProfile';
import ReportMissing from './pages/UserSide/UserDashboardPages/ReportMissing';
import DatabaseViewProfile from './Components/DatabaseViewProfile';
import Analytics from './pages/dashboardPages/Analytics';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/usersignup" element={<SignUp />}></Route>
          <Route path="/" element={<Login />}></Route>
          {/* <Route path="/policelogin" element={<PoliceLogin />}></Route> */}
          <Route path="/dashboard" element={<PoliceDashboard />}>
            <Route path="" element={<Dashboardmain />} />
            <Route path="caseregister" element={<RegisteredCasesDisplay />} />
            <Route path="launchedfirdata" element={<Launchedfirdata />} />
            <Route path="database" element={<Dashboarddatabase />} />
            {/*on click to view comlete profile from tables of faunched fir and database*/}
            <Route path="viewpersondetail/:missingpersonid" element={<DatabaseViewProfile/>}/>
            <Route path="firdetails/:missingpersonid" element={<UserSubmittedData />}/>


            <Route path="scanface" element={<ScanFace />} />
            {/*on click of caseregistered*/}
            {/* <Route path="usersubmitdata" element={<UserSubmittedData />} /> */}

            <Route path="policeprofile" element={<PoliceProfile />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* <Route path="/usersubmitdata" element={<UserSubmittedData />} /> */}

          <Route path="/userdashboard" element={<UserApplication />}>
            <Route path="" element={<UserHome />} />
            <Route path="reportmissing" element={<ReportMissing />} />
            <Route path="missingpersonprofile" element={<MissingPersonProfile />} />


          </Route>
          {/* <Route path="/form" element={<Form/>}></Route> */}
          {/* <Route path="/scan_face" element={<ScanFace />}></Route> */}

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

