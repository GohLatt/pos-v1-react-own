function Total({ selectProducts, setSelectProducts }) {
  const buyAll = () => {
    setSelectProducts([]);
    if (selectProducts.length) {
      alert("Thank you for much ❤❤❤");
    }
  };
  return (
    <div className="total-container">
      <div className="total">
        <p>Total Amount</p>
        <p>
          -
          {selectProducts
            .map((p) => p.price)
            .reduce((acc, cur) => acc + cur, 0)}
          MMK
        </p>
      </div>
      <button onClick={buyAll} className="btn">
        Buy
      </button>
    </div>
  );
}

export default Total;
