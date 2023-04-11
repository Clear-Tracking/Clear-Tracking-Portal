import { useEffect } from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
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
import MatchResults from './pages/dashboardPages/MatchResults';
import UserProfile from './pages/UserSide/UserDashboardPages/UserProfile';
import UserAnalytics from './pages/UserSide/UserDashboardPages/UserAnalytics';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';

// Redux Actions
import { resetRequestStatus } from './store/globalSlice';
// Constants
import { REQUEST_STATUS_SUCCEEDED, REQUEST_STATUS_FAILED, REQUEST_STATUS_LOADING } from './constants/Constants';
import PersonFoundData from './pages/dashboardPages/PersonFoundData';


function App() {

    // Redux State
    const globalState = useSelector((state) => state.global);
    const dispatch = useDispatch();

   // toaster for Login state
   useEffect(() => {

    // In case of success
    if (globalState.requestStatus === REQUEST_STATUS_SUCCEEDED) {
      toast.success(globalState.message, {
        position: "bottom-right",
        hideProgressBar: false,
        autoClose: 2000,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
      dispatch(resetRequestStatus());
    }

    // In case of failure
    else if (globalState.requestStatus === REQUEST_STATUS_FAILED) {
      toast.error(globalState.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
      dispatch(resetRequestStatus());
    }

  }, [globalState.requestStatus])


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
            <Route path="alert" element={<PersonFoundData />} />
            <Route path="launchedfirdata" element={<Launchedfirdata />} />
            <Route path="database" element={<Dashboarddatabase />} />
            {/*on click to view comlete profile from tables of faunched fir and database*/}
            <Route path="viewpersondetail/:missingpersonid" element={<DatabaseViewProfile/>}/>
            <Route path="firdetails/:missingpersonid" element={<UserSubmittedData />}/>


            <Route path="scanface" element={<ScanFace />} />
            <Route path="matches" element={<MatchResults />} />
            {/*on click of caseregistered*/}
            {/* <Route path="usersubmitdata" element={<UserSubmittedData />} /> */}

            <Route path="policeprofile" element={<PoliceProfile />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* <Route path="/usersubmitdata" element={<UserSubmittedData />} /> */}

          <Route path="/userdashboard" element={<UserApplication />}>
            <Route path="" element={<UserHome />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="reportmissing" element={<ReportMissing />} />
            <Route path="missingpersonprofile" element={<MissingPersonProfile />} />
            <Route path="analytics" element={<UserAnalytics />}/>


          </Route>
          {/* <Route path="/form" element={<Form/>}></Route> */}
          {/* <Route path="/scan_face" element={<ScanFace />}></Route> */}

        </Routes>
      </BrowserRouter>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable={false} theme="dark" />
    </>
  );
}

export default App;

