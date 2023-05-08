function Item({ selectProducts, product, setSelectProducts }) {
  const selectProduct = (id) => {
    if (!selectProducts.map((p) => p.id).includes(id)) {
      setSelectProducts((pre) => [...pre, product]);
    } else {
      alert("This products already added");
    }
  };
  return (
    <div className="item">
      <div className="item-info">
        <h2>{product.productName}</h2>
        <span>-</span>
        <p>{product.price}</p>
      </div>
      <button
        className="btn btn-move-to-card"
        onClick={() => selectProduct(product.id)}
      >
        Card
      </button>
    </div>
  );
}
export default Item;
