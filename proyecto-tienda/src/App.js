// src/App.js
import React, { useState } from 'react';
import EmployeeForm from './views/components/EmployeeForm';
import EmployeeList from './views/components/EmployeeList';
import './styles/App.css';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleEmployeeAdded = () => {
        setRefresh(!refresh); // Forzar la actualización de la lista
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <EmployeeForm onEmployeeAdded={handleEmployeeAdded} />
                <EmployeeList key={refresh} />
            </div>
        </div>
    );
};

export default App;
