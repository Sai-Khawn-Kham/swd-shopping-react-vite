import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../../../components/Breadcrumb";
import useCartStore from "../../../store/useCartStore";

const ProductDetailPage = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const { carts, addCart } = useCartStore();

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddedBtn = (e) => {
    e.stopPropagation();
    toast.error("Item is already in the Cart");
  };

  const handleAddCartBtn = (e) => {
    e.stopPropagation();
    toast.success("Item added to the Cart");
    const newCart = {
      id: Date.now(),
      productId: product.id,
      quantity: 1,
    };
    addCart(newCart);
  };

  return (
    <Container>
      <Breadcrumb currentPageTitle="Product Detail" />

      <div className="border border-gray-950 p-3 md:p-5 lg:p-10 mb-5">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-pulse">
            <div className="flex justify-center items-center">
              <div className="w-2/3 h-80 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              <div className="h-5 bg-gray-200 rounded w-1/4"></div>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
              <div className="h-5 bg-gray-200 rounded w-1/3"></div>
              <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center items-center">
              <img src={product.image} alt={product.title} className="w-2/3" />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h3 className="text-2xl font-semibold">{product.title}</h3>
              <p className="bg-gray-300 text-gray-700 inline-block px-3 py-1">
                {product.category}
              </p>
              <p className="grow">{product.description}</p>
              {product.rating && <Rating rate={product.rating.rate} />}
              <div className="flex justify-between items-center w-full">
                <p>Price: ${product.price}</p>
                {carts.find((cart) => cart.productId === product.id) ? (
                  <button
                    onClick={handleAddedBtn}
                    className="text-sm border border-gray-950 px-3 py-1 bg-gray-950 text-gray-50"
                  >
                    Added
                  </button>
                ) : (
                  <button
                    onClick={handleAddCartBtn}
                    className="text-sm border border-gray-950 px-3 py-1"
                  >
                    Add Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default ProductDetailPage;
