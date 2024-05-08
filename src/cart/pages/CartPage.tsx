import { useNavigate } from "react-router-dom";
import { removeAllCart } from "../../redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CartList } from "../components/CartList";
import { EmptyCart } from "../components/EmptyCart";
import { toast } from "sonner";

export const CartPage = () => {
  const navigate = useNavigate()
  const { cart, total } = useAppSelector(
    (state) => state.productReducer
  );
  const dispatch = useAppDispatch()

  const payCart = () => {
    dispatch(removeAllCart())
    toast.success('Thank you for shopping with us!')
    navigate('/products',{
      replace:true
    })
  }
  
  return (
    <div className="w-full flex flex-col mt-20 items-center">
      {
        cart.length==0 && <EmptyCart />
      }
      {
        cart.length!=0 && <div className="w-[600px] flex flex-col gap-5 border-double border-4 border-[#808080] p-10 rounded-xl">
        <span className="text-3xl uppercase text-center">shopping cart</span>
        <hr />
        <CartList products={cart}/>
        <hr />
        <div className="w-full flex justify-between">
        <span>Total price:</span>
        <p>{`${total}$`}</p>
        </div>
        <div className="w-full flex flex-row justify-evenly">
          <button className="bg-red-500 text-[#2d2d2d] p-2 rounded-lg font-bold transition-all duration-300 hover:bg-red-400 hover:text-[#3c3c3b]" onClick={()=>dispatch(removeAllCart())}>Remove all</button>
          <button className="bg-blue-500 text-[#2d2d2d] p-2 rounded-lg font-bold transition-all duration-300 hover:bg-blue-400 hover:text-[#3c3c3b]" onClick={()=>payCart()}>Pay cart</button>
        </div>
      </div>
      }
    </div>
  );
};
