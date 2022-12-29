import React, { useState, useEffect } from "react";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import AuthContext from "./context/cart-context";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [cart, setCart] = useState(new Map());
  const [cartModal, setCartModal] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const addToCart = (id, qty) => {
    if (cart.has(id)) {
      const currentQty = +cart.get(id);
      setCart((prevState) => new Map([...prevState, [id, currentQty + +qty]]));
    } else {
      qty > 0 && setCart((prevState) => new Map([...prevState, [id, +qty]]));
    }
  };

  const removeFromCart = (id, qty) => {
    if (cart.has(id)) {
      const currentQty = +cart.get(id);
      const finalQty = currentQty > qty ? currentQty - qty : 0;
      // finalQty <= 0 && setCart((prevState) => {
      //   prevState.delete(id);
      //   console.log('cart zero', prevState);
      // });
      // finalQty <= 0 && console.log('qty zero', finalQty);
      console.log(typeof finalQty, finalQty);
      finalQty > 0 &&
        setCart((prevState) => new Map([...prevState, [id, finalQty]]));
    }
  };

  const onAddtHandler = (event) => {
    event.preventDefault();

    const id = event.target[0].id;
    const qty = event.target[0].value;
    addToCart(id, qty);
  };

  const toggleCart = () => {
    setCartModal((prevState) => !prevState);
  };

  useEffect(() => {
    setCartProducts(
      DUMMY_MEALS.filter((meal) => cart.has(meal.id)).map((meal) => ({
        ...meal,
        qty: cart.get(meal.id),
      }))
    );
    setCartTotalAmount(
      cartProducts.reduce(
        (acc, meal) => acc + meal.price * cart.get(meal.id),
        0
      )
    );
    setCartTotalQty(
      cartProducts.reduce((acc, meal) => acc + cart.get(meal.id), 0)
    );
    console.log(cartProducts, cartTotalAmount, cartTotalQty);
  }, [cart]);

  return (
    <div>
      <AuthContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          cartProducts,
          cartTotalQty,
          cartTotalAmount,
        }}
      >
        <Header showCart={toggleCart} />
        {cartModal && <Cart showCart={toggleCart} />}
      </AuthContext.Provider>
      <AvailableMeals mealList={DUMMY_MEALS} onAdd={onAddtHandler} />
    </div>
  );
}

export default App;
