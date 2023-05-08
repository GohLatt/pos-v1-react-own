import HeaderTitle from "./HeaderTitle";
import SearchForm from "./SearchForm";
import NewItemBtn from "./NewItemBtn";
import Card from "../UI/Card";
import "./Header.css";
const Header = ({ products, setProducts, show, setShow }) => {
  return (
    <header className="header">
      <Card className="header-left">
        <HeaderTitle />
        <SearchForm
          products={products}
          setProducts={setProducts}
          show={show}
          setShow={setShow}
        />
      </Card>
      <NewItemBtn show={show} setShow={setShow} />
    </header>
  );
};
export default Header;
