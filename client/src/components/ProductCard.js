import Carousel from "./Carousel";
import Dropdown from "./Dropdown/Dropdown";

const ProductCard = ({ info }) => {
  const { listOfImages, productName, options } = info;

  return (
    <div className="product__card">
      <div className="product__card--carousel">
        <Carousel slides={listOfImages} height="150px" autoPlay={5} />
      </div>
      <p className="product__card--text">{productName}</p>
      <Dropdown list={options} />
    </div>
  );
};
export default ProductCard;
