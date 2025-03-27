import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.tsx';
import OrderSelection from './pages/orderSelection.tsx';
import DealershipSelection from './pages/dealershipSelection.tsx';
import ManufacturerSelection from './pages/ManufacturerSelection.tsx';
import VehicleDetails from './pages/VehicleDetails.tsx';
import Home from './pages/home.tsx';
import VehicleList from './pages/vehicleList.tsx'
import Customer from './pages/recordCustomerInfo.tsx';
import Dealership1 from './pages/Dealership1.tsx';
import Dealership2 from './pages/Dealership2.tsx';
import Dealership3 from './pages/Dealership3.tsx';
import Dealership4 from './pages/Dealership4.tsx';
import Dealership5 from './pages/Dealership5.tsx';
import Dealership6 from './pages/Dealership6.tsx';

function App() {
  return (
    <div className="App">
      {/* Wrap Routes in BrowserRouter */}
      <Router>
        <Routes>
          {/* Define Routes for the app */}
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />                        
          <Route path="/order-selection" element={<OrderSelection />} />
          <Route path="/dealershipSelection" element={<DealershipSelection />} />
          <Route path="/ManufacturerSelection" element={<ManufacturerSelection />} />
          <Route path="/VehicleDetails" element={<VehicleDetails />} />
          <Route path="/vehicleList" element={<VehicleList />} />
          <Route path="/customerInformation" element={<Customer />} />
          <Route path="/dealership-1" element={<Dealership1 />} />
          <Route path="/dealership-2" element={<Dealership2 />} />
          <Route path="/dealership-3" element={<Dealership3 />} />
          <Route path="/dealership-4" element={<Dealership4 />} />
          <Route path="/dealership-5" element={<Dealership5 />} />
          <Route path="/dealership-6" element={<Dealership6 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
