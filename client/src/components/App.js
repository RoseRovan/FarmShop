import { useState, useEffect } from "react";
import Header from "./Header";
import NewProductForm from "./NewProductForm";
import ProductItem from "./ProductItem";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  function handleAddProduct(addedProduct) {
    setProducts((products) => [...products, addedProduct]);
  }

  function handleUpdateProduct(updatedProduct) {
    setProducts((products) =>
      products.map((product) => {
        return product.id === updatedProduct.id ? updatedProduct : product;
      })
    );
  }

  function handleDeleteProduct(deletedProduct) {
    setProducts((products) =>
      products.filter((product) => product.id !== deletedProduct.id)
    );
  }

  return (
    <>
      <Header productCount={products.length} />
      <main>
        <NewProductForm onAddProduct={handleAddProduct} />
        <section className="spice-list">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;