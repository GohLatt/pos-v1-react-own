import { useState } from "react";
import Card from "../../UI/Card";
import Item from "./Item";

function LeftSection({ selectProducts, setSelectProducts, products }) {
  return (
    <Card className="left-section">
      {products.map((product) => (
        <Item
          key={product.id}
          selectProducts={selectProducts}
          product={product}
          setSelectProducts={setSelectProducts}
        />
      ))}
    </Card>
  );
}

export default LeftSection;
