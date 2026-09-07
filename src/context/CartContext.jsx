import React, {
  createContext,
  useContext,
  useState,
} from "react";

export const ContextCart = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    // Show notification
    setMessage("Item added to cart!");

    // Hide notification after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function removeFromCart(id) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  }

  function getCartCount() {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  function getCartTotal() {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  return (
    <ContextCart.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartCount,
        getCartTotal,
        message,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};

export default CartContext;

export function useCart() {
  return useContext(ContextCart);
}
