import LeftSection from "./Left-section/LeftSection";
import RightSection from "./Right-section/RightSection";
import DataAddForm from "./DataAdd/DataAddForm";

import "./Main.css";
const Main = ({
  selectProducts,
  setSelectProducts,
  increase,
  decrease,
  deleteItem,
  products,
  setProducts,
  show,
  setShow,
  //keydownHanle,
}) => {
  return (
    <main className="main">
      <LeftSection
        selectProducts={selectProducts}
        setSelectProducts={setSelectProducts}
        products={products}
      />
      <RightSection
        selectProducts={selectProducts}
        setSelectProducts={setSelectProducts}
        increase={increase}
        decrease={decrease}
        deleteItem={deleteItem}
        //keydownHanle={keydownHanle}
      />
      <DataAddForm
        show={show}
        setShow={setShow}
        products={products}
        setProducts={setProducts}
      />
    </main>
  );
};
export default Main;
