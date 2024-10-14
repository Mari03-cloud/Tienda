// src/controllers/employeeController.js
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../models/employeeModel';

export const getAllEmployees = () => getEmployees();

export const createEmployee = (employeeData) => addEmployee(employeeData);

export const editEmployee = (id, updatedData) => updateEmployee(id, updatedData);

export const removeEmployee = (id) => deleteEmployee(id);
