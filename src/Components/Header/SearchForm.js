import { useState } from "react";
import "./SearchForm.css";
import { productData } from "../../Data/Data";
const SearchForm = ({ products, setProducts }) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(
      products.filter((p) =>
        p.productName.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
    setSearchWord("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search For Item Name"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button type="submit" className="btn btn-search">
          Search
        </button>
      </form>
      <button
        className="btn btn-search"
        onClick={() => setProducts(productData)}
      >
        Show All
      </button>
    </>
  );
};
export default SearchForm;
