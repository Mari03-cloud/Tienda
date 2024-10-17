import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmployeeForm from 'views/components/EmployeeForm';  // Vista de empleados
import ProductForm from 'views/components/ProductForm';    // Vista de productos
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/employees">Empleados</Link></li>
            <li><Link to="/products">Productos</Link></li>
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/employees" element={<EmployeeForm />} />
            <Route path="/products" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
