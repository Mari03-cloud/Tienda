import React, { useState } from 'react';
import { Employee } from '../models/employeeModel';

const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    paternalLastName: '',
    maternalLastName: '',
    role: '',
    phone: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = new Employee(
      Date.now(),
      formData.name,
      formData.paternalLastName,
      formData.maternalLastName,
      formData.role,
      formData.phone
    );
    addEmployee(newEmployee);
    setFormData({
      name: '',
      paternalLastName: '',
      maternalLastName: '',
      role: '',
      phone: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      {/* Otros campos para los datos del empleado */}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EmployeeForm;
