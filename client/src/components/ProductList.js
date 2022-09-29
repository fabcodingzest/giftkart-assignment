import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product._id} info={product} />
      ))}
    </div>
  );
}

export default ProductList;
