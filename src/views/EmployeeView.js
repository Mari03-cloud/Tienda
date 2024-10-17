import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import EmployeeModel from '../models/EmployeeModel';
import EmployeeController from '../controllers/EmployeeController';
import './styles.css';

const EmployeeView = () => {
    const [model] = useState(new EmployeeModel());
    const [controller] = useState(new EmployeeController(model));
    const [employees, setEmployees] = useState(controller.getEmployees());

    const handleAddEmployee = (employee) => {
        controller.addEmployee(employee);
        setEmployees(controller.getEmployees());
    };

    const handleUpdateEmployee = (employee) => {
        const updatedData = prompt("Ingrese nuevos datos (separados por coma): Nombre, Apellido Paterno, Apellido Materno, Cargo, Teléfono")?.split(',');
        if (updatedData && updatedData.length === 5) {
            const [nombre, apellidoPaterno, apellidoMaterno, cargo, telefono] = updatedData;
            controller.updateEmployee(employee.id, { nombre, apellidoPaterno, apellidoMaterno, cargo, telefono });
            setEmployees(controller.getEmployees());
        }
    };

    const handleDeleteEmployee = (id) => {
        controller.deleteEmployee(id);
        setEmployees(controller.getEmployees());
    };

    return (
        <div className="employee-view">
            <EmployeeForm onAddEmployee={handleAddEmployee} />
            <EmployeeTable employees={employees} onUpdate={handleUpdateEmployee} onDelete={handleDeleteEmployee} />
        </div>
    );
};

export default EmployeeView;
