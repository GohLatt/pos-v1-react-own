const NewItemBtn = ({ show, setShow }) => {
  return (
    <button onClick={() => setShow(false)} className="btn btn-newitem">
      New Items
    </button>
  );
};
export default NewItemBtn;
