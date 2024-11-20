import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart items from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    calculateTotalPrice(cart);
  }, []);

  // Calculate the total price of the cart
  const calculateTotalPrice = (cart) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  return (
    <div className="  h-full bg-gray-100 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items List */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Total Price Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-gray-600">
              Total Items:
            </span>
            <span className="text-lg font-semibold text-gray-800">
              {cartItems.length}
            </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-gray-600">Total:</span>
            <span className="text-lg font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            disabled={cartItems.length === 0}
            className={`w-full px-6 py-3 text-white font-semibold rounded-md transition ${
              cartItems.length > 0
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
