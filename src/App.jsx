import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import Cart from "./components/Cart";
import { useEffect } from "react";
import Products from "./components/Products";
function App() {
  const [apiRecieve, setApiReceive] = useState([]);
  const [cartValue, setCartValue] = useState([]);
  const [warn, setWarn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setApiReceive(data);
    };
    fetchData();
  }, []);
  const cartAdded = (i) => {
    let cartadded = true;
    cartValue?.map((item) => (item.id === i.id ? (cartadded = false) : null));
    cartadded ? setCartValue([...cartValue, i]) : setWarn(true);
  };
  function removefun(i) {
    let deleted = cartValue?.filter((item) => item.id !== i.id);
    setCartValue(deleted);
  }
  useEffect(() => {
    setTimeout(() => {
      setWarn(false);
    }, 3000);
  }, [warn]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              apiRecieve={apiRecieve}
              setApiReceive={setApiReceive}
              cartValue={cartValue}
              setCartValue={setCartValue}
              cartAdded={cartAdded}
              warn={warn}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartValue={cartValue} removefun={removefun} />}
        />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
