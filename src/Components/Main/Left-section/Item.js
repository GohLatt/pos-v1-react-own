function Item({ selectProducts, product, setSelectProducts }) {
  const selectProduct = (id) => {
    const productExit = selectProducts.find((p) => p.id === id);
    if (productExit) {
      setSelectProducts(
        selectProducts.map((p) =>
          p.id === id
            ? {
                ...productExit,
                count: productExit.count + 1,
                price: productExit.price + productExit.calPrice,
              }
            : p
        )
      );
    } else {
      setSelectProducts((pre) => [...pre, product]);
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
