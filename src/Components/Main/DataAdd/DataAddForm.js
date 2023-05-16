import { useState } from "react";
import "./DataAdd.css";
function DataAddForm({ show, setShow, products, setProducts }) {
  let classname = `dataAdd ${show ? "hide" : "show"}`;
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const addData = (e) => {
    e.preventDefault();
    if (productName && price && category) {
      setProducts([
        ...products,
        {
          id: Date.now(),
          productName,
          price,
          category,
          count: 1,
          calPrice: price,
        },
      ]);
    } else {
      alert("Enter All fields");
    }
    setCategory("");
    setPrice("");
    setProductName("");
  };
  return (
    <div className={classname}>
      <i className="fa-solid fa-xmark" onClick={() => setShow(!show)}></i>
      <form onSubmit={addData}>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Enter Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DataAddForm;
