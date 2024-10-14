// src/views/components/EmployeeList.js
import React, { useState } from 'react';
import { getAllEmployees, removeEmployee } from '../../controllers/employeeController';

const EmployeeList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState(getAllEmployees());

    const handleDelete = (id) => {
        removeEmployee(id);
        setEmployees(getAllEmployees()); // Actualiza la lista después de eliminar
    };

    const filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.fatherLastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.motherLastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="list-container">
            <h2>Lista de Empleados</h2>
            <input 
                type="text" 
                placeholder="Buscar..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.fatherLastName}</td>
                            <td>{emp.motherLastName}</td>
                            <td>{emp.position}</td>
                            <td>{emp.phone}</td>
                            <td>
                                <button onClick={() => console.log(`Actualizar ${emp.id}`)}>🖉</button>
                                <button onClick={() => handleDelete(emp.id)}>🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
