// employeeController.js

export const addEmployee = (employees, newEmployee) => {
    return [...employees, newEmployee];
  };
  
  export const updateEmployee = (employees, id, updatedEmployee) => {
    return employees.map(emp => emp.id === id ? updatedEmployee : emp);
  };
  
  export const deleteEmployee = (employees, id) => {
    return employees.filter(emp => emp.id !== id);
  };