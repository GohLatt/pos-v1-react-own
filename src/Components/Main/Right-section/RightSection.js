import AddToCardItem from "./AddToCardItem";
import Total from "./Total";
import Card from "../../UI/Card";

function RightSection({
  selectProducts,
  setSelectProducts,
  increase,
  decrease,
  deleteItem,
  // keydownHanle,
}) {
  return (
    <div className="right-section">
      <Card className="card-container">
        {selectProducts
          ? selectProducts.map((selectProduct) => (
              <AddToCardItem
                key={selectProduct.id}
                selectProduct={selectProduct}
                increase={increase}
                decrease={decrease}
                deleteItem={deleteItem}
                //keydownHanle={keydownHanle}
              />
            ))
          : null}
      </Card>
      <Total
        selectProducts={selectProducts}
        setSelectProducts={setSelectProducts}
      />
    </div>
  );
}

export default RightSection;
