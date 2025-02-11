import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.tsx';
import OrderSelection from './pages/orderSelection.tsx';
import DealershipSelection from './pages/dealershipSelection.tsx';
import ManufacturerSelection from './pages/ManufacturerSelection.tsx';
import VehicleDetails from './pages/VehicleDetails.tsx';
import Home from './pages/home.tsx';
import VehicleList from './pages/vehicleList.tsx';

function App() {
  return (
    <div className="App">
      {/* Wrap Routes in BrowserRouter */}
      <Router>
        <Routes>
          {/* Define Routes for the app */}
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />                        
          <Route path="/order-selection" element={<OrderSelection />} />
          <Route path="/dealershipSelection" element={<DealershipSelection />} />
          <Route path="/ManufacturerSelection" element={<ManufacturerSelection />} />
          <Route path="/VehicleDetails" element={<VehicleDetails />} />
          <Route path="/VehicleList" element={<VehicleList />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
