import { useState } from "react";

function AddToCardItem({
  selectProduct,
  increase,
  decrease,
  deleteItem,
  //keydownHanle,
}) {
  const [countItem, setItemCount] = useState(0);
  return (
    <div className="add-to-card-item">
      <div className="item-info">
        <h2>{selectProduct.productName}</h2>
        <span>-</span>
        <p>{selectProduct.price}</p>
      </div>
      <div className="action-groups">
        <input
          type="text"
          value={selectProduct.count}
          onChange={(e) => setItemCount(e.target.value)}
        />
        <button
          className="btn-move-to-card"
          onClick={() => increase(selectProduct.id)}
        >
          +
        </button>
        <button
          className="btn-move-to-card"
          onClick={() => decrease(selectProduct.id)}
        >
          -
        </button>
        <button
          className="btn-move-to-card"
          onClick={() => deleteItem(selectProduct.id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default AddToCardItem;
