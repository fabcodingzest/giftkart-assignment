import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Searchbar from "./components/Searchbar";
import { baseAPI, carouselImages } from "./utilities/constants";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      fetch(`${baseAPI}/products`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((error) => alert(error.message));
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <Searchbar />
      <Carousel slides={carouselImages} fullScreen />
      <ProductList data={products} />
    </div>
  );
}

export default App;
