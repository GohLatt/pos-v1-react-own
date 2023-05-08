import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { productData } from "./Data/Data";
const App = () => {
  const [selectProducts, setSelectProducts] = useState([]);
  const [products, setProducts] = useState(productData);
  const [show, setShow] = useState(true);

  const increase = (id) => {
    let increaseItems = selectProducts.map((p) => {
      if (p.id === id) {
        return { ...p, count: p.count + 1, price: p.price + p.calPrice };
      }
      return p;
    });
    setSelectProducts(increaseItems);
  };

  // const keydownHanle = (id, count, e) => {
  //   let increaseItems = selectProducts.map((p) => {
  //     if (p.id === id) {
  //       return { ...p, count: p.count * count, price: p.calPrice * count };
  //     }
  //     return p;
  //   });
  //   setSelectProducts(increaseItems);
  // };

  const decrease = (id) => {
    let decreaseItems = selectProducts.map((p, i) => {
      if (p.id === id) {
        return {
          ...p,
          count: p.count >= 2 ? p.count - 1 : null,
          price: p.price > p.calPrice ? p.price - p.calPrice : p.calPrice,
        };
      }
      return p;
    });
    setSelectProducts(decreaseItems);
  };

  const deleteItem = (id) => {
    let deleteItems = selectProducts.filter((p) => p.id !== id);
    setSelectProducts(deleteItems);
  };
  return (
    <>
      <Header
        products={products}
        setProducts={setProducts}
        show={show}
        setShow={setShow}
      />
      <Main
        selectProducts={selectProducts}
        setSelectProducts={setSelectProducts}
        increase={increase}
        decrease={decrease}
        deleteItem={deleteItem}
        products={products}
        setProducts={setProducts}
        show={show}
        setShow={setShow}
        //keydownHanle={keydownHanle}
      />
    </>
  );
};

export default App;
