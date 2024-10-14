// src/views/components/EmployeeTable.js
import React from 'react';

const EmployeeTable = ({ employees }) => {
  return (
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
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.paternalLastName}</td>
            <td>{employee.maternalLastName}</td>
            <td>{employee.role}</td>
            <td>{employee.phone}</td>
            <td>
              {/* Aquí irán los iconos para actualizar y eliminar */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
