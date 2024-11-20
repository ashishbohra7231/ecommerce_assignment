import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productid");
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  // Check if the product is already in the cart
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setIsInCart(cart.some((item) => item.id === Number(productId)));
  }, [productId]);

  // Fetch product details
  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch product details");
          }
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [productId]);

  // Add product to cart
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(true);
  };

  // Remove product from cart
  const removeFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsInCart(false);
  };

  // Navigate to the cart page
  const goToCart = () => {
    navigate("/cart");
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="text-gray-600 text-sm mb-4">
          <Link to="/" className="hover:underline text-blue-600">
            Home
          </Link>{" "}
          / <span className="text-gray-500">{product?.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-6">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full h-96 object-contain rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {product?.title}
              </h1>
              <p className="text-gray-600 text-sm mb-4">{product?.description}</p>
              <p className="text-xl font-semibold text-green-600 mb-4">
                Price: ${product?.price}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-lg">
                  ★ {product?.rating.rate}
                </span>
                <span className="text-gray-500 text-sm">
                  ({product?.rating.count} reviews)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              {isInCart ? (
                <>
                  <button
                    onClick={removeFromCart}
                    className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                  >
                    Remove from Cart
                  </button>
                  <button
                    onClick={goToCart}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                  >
                    Go to Cart
                  </button>
                </>
              ) : (
                <button
                  onClick={addToCart}
                  className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
