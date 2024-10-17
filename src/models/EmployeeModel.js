// Modelo para representar la estructura de datos de empleados
class EmployeeModel {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push({ id: this.employees.length + 1, ...employee });
    }

    getEmployees() {
        return this.employees;
    }

    updateEmployee(id, updatedData) {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            this.employees[index] = { ...this.employees[index], ...updatedData };
        }
    }

    deleteEmployee(id) {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }
}

export default EmployeeModel;
