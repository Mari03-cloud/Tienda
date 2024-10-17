import React from 'react';
import 'styles/ProductForm.css';

const ProductForm = () => {
  return (
    <div className="product-form">
      <h2>Registrar Producto</h2>
      <form>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" />

        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="purchasePrice">Precio de Compra:</label>
        <input type="number" id="purchasePrice" name="purchasePrice" />

        <label htmlFor="salePrice">Precio de Venta:</label>
        <input type="number" id="salePrice" name="salePrice" />

        <label htmlFor="initialInventory">Inventario Inicial:</label>
        <input type="number" id="initialInventory" name="initialInventory" />

        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category">
          <option value="electronics">Electrónica</option>
          <option value="clothing">Ropa</option>
          <option value="groceries">Comestibles</option>
        </select>

        <button type="submit">Registrar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
