// src/models/employeeModel.js
let employees = [];

export const getEmployees = () => {
    return employees;
};

export const addEmployee = (newEmployee) => {
    employees.push(newEmployee);
};

export const updateEmployee = (id, updatedData) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedData };
    }
};

export const deleteEmployee = (id) => {
    employees = employees.filter(emp => emp.id !== id);
};
