// Controlador para manejar la lógica de negocio de empleados
class EmployeeController {
    constructor(model) {
        this.model = model;
    }

    addEmployee(employee) {
        this.model.addEmployee(employee);
    }

    getEmployees() {
        return this.model.getEmployees();
    }

    updateEmployee(id, updatedData) {
        this.model.updateEmployee(id, updatedData);
    }

    deleteEmployee(id) {
        this.model.deleteEmployee(id);
    }
}

export default EmployeeController;
