import React from 'react';
import './ProductTable.css';

const ProductTable = () => {
  return (
    <div className="product-table">
      <h2>Productos Registrados</h2>
      <input type="text" placeholder="Buscar por nombre o código..." className="search-bar" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio de Compra</th>
            <th>Precio de Venta</th>
            <th>Inventario</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí se mostrarán los productos registrados */}
          <tr>
            <td>1</td>
            <td>Televisor</td>
            <td>$500</td>
            <td>$600</td>
            <td>10</td>
            <td>Electrónica</td>
            <td>
              <button className="edit-btn">Modificar</button>
              <button className="delete-btn">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
