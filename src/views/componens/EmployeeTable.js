import React from 'react';

const EmployeeTable = ({ employees, onUpdate, onDelete }) => {
    return (
        <div>
            <h2>Lista de Empleados</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.nombre}</td>
                            <td>{employee.apellidoPaterno}</td>
                            <td>{employee.apellidoMaterno}</td>
                            <td>{employee.cargo}</td>
                            <td>{employee.telefono}</td>
                            <td>
                                <button onClick={() => onUpdate(employee)}>Actualizar</button>
                                <button onClick={() => onDelete(employee.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
