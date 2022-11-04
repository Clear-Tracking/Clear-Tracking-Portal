import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import PoliceLogin from './pages/PoliceLogin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/policelogin" element={<PoliceLogin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
