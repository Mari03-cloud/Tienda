import React, { useState } from 'react';

const EmployeeForm = ({ onAddEmployee }) => {
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEmployee({ nombre, apellidoPaterno, apellidoMaterno, cargo, telefono, password });
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setCargo('');
        setTelefono('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registro de Empleado</h2>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <input type="text" placeholder="Apellido Paterno" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} required />
            <input type="text" placeholder="Apellido Materno" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} required />
            <select value={cargo} onChange={(e) => setCargo(e.target.value)} required>
                <option value="">Selecciona un cargo</option>
                <option value="Gerente">Gerente</option>
                <option value="Desarrollador">Desarrollador</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Analista">Analista</option>
            </select>
            <input type="tel" placeholder="Número de Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default EmployeeForm;
