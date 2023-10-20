import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
    
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="h-[700] Body bg-gradient-to-r from-pink-500 to-yellow-400">
      <h1 className="p-2 font-bold">Cart Items - {cartItems.length}</h1>
      {/* <FoodItem {...cartItems[0]}/> */}
      {/* Sending multiple parameters using ... */}
      <button
        onClick={() => handleClearCart()}
        className="bg-green-400 p-2 m-2 search-btn text-white rounded-md shadow-xl"
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;