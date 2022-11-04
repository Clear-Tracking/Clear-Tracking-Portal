import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
