import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Searchbar from "./components/Searchbar";
import { baseAPI, carouselImages } from "./utilities/constants";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      fetch(`${baseAPI}/products`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
        });
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <Searchbar />
      <Carousel slides={carouselImages} fullScreen autoPlay={3} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ProductList data={products} />
      )}
    </div>
  );
}

export default App;
