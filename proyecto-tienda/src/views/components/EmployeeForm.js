// src/views/components/EmployeeForm.js
import React, { useState } from 'react';
import { createEmployee } from '../../controllers/employeeController';

const EmployeeForm = ({ onEmployeeAdded }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fatherLastName, setFatherLastName] = useState('');
    const [motherLastName, setMotherLastName] = useState('');
    const [position, setPosition] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: Date.now(),
            name,
            lastName,
            fatherLastName,
            motherLastName,
            position,
            phone,
            password, // Asegúrate de manejar la contraseña de forma segura en un entorno real
        };
        createEmployee(newEmployee);
        onEmployeeAdded();
        setName('');
        setLastName('');
        setFatherLastName('');
        setMotherLastName('');
        setPosition('');
        setPhone('');
        setPassword('');
    };

    return (
        <div className="form-container">
            <h2>Registro de Empleados</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Apellido Paterno" value={fatherLastName} onChange={(e) => setFatherLastName(e.target.value)} required />
                <input type="text" placeholder="Apellido Materno" value={motherLastName} onChange={(e) => setMotherLastName(e.target.value)} required />
                <input type="text" placeholder="Cargo" value={position} onChange={(e) => setPosition(e.target.value)} required />
                <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
