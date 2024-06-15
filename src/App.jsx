import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrintInvoice from './components/PrintInvoice';
import SmartReader from './pages/Profile';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/print-invoice" element={<PrintInvoice />} />
      </Routes>
    </Router>
  )
}

export default App