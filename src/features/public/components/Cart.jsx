import React from "react";
import Swal from "sweetalert2";
import useCartStore from "../../../store/useCartStore";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#444",
        cancelButtonColor: "#888",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Removed product from the cart");
        }
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#444",
      cancelButtonColor: "#888",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCart(id);
        toast.success("Removed product from the cart");
      }
    });
  };

  if (loading) {
    return (
      <div className="p-2 border border-gray-950 rounded-lg animate-pulse flex gap-3">
        <div className="w-16 h-16 bg-gray-200 rounded"></div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
          <div className="h-4 bg-gray-200 w-1/3 rounded"></div>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="p-2 border border-gray-950 rounded-lg flex gap-3 group">
      <div className="relative">
        <img src={product.image} alt={product.title} className="h-16 object-contain" />
        <BsTrash
          onClick={handleDelete}
          className="absolute top-0 right-0 text-red-500 cursor-pointer opacity-0 group-hover:opacity-100 transition"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <p className="line-clamp-1">{product.title}</p>
        <div className="text-xs flex justify-between items-center">
          <p className="text-gray-500">${product.price}</p>

          <div className="bg-gray-200 flex items-center gap-2 rounded px-2">
            <button onClick={handleDecreaseQuantity} className="px-1">-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantity} className="px-1">+</button>
          </div>

          <p className="font-medium">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
