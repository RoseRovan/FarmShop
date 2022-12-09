import StarRating from "./StarRating";

function ProductItem({ product, onUpdateProduct, onDeleteProduct }) {
  const { id, image, title, description, note, rating } = product;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateProduct);
  }

  function handleDeleteProduct() {
    fetch(`/products/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteProduct(product);
      }
    });
  }

  return (
    <div className="product-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Tasting Note: <em>{note}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeleteProduct}>Delete Product</button>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;