// employeeModel.js

export class Employee {
    constructor(id, name, paternalLastName, maternalLastName, role, phone) {
      this.id = id;
      this.name = name;
      this.paternalLastName = paternalLastName;
      this.maternalLastName = maternalLastName;
      this.role = role;
      this.phone = phone;
      // Nota: La password se manejaría de manera segura, por ejemplo, no se almacena aquí de forma directa.
    }
  }
  