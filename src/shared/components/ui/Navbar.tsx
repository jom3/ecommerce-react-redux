import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../redux/hooks"

export const Navbar = () => {
  const navigation = useNavigate()

  const cartCount = useAppSelector(state=>state.productReducer.count)

  const goToCart = () => {
    navigation('/cart',{
      replace:true
    })
  }

  return (
    <div className="w-full px-3 py-2 flex justify-between items-center border-b-2 border-[#808080]">
      <Link to={'/'}> <img src="/images/logo.svg" alt="logo-image" /></Link>
      <h1 className="uppercase text-3xl font-bold">eco shopping</h1>
      <button className="relative flex" disabled={cartCount<=0}  onClick={()=>goToCart()}><img src="/images/cart.svg" alt="cart-image"/><span className="absolute left-1 top-2 right-0 text-xs font-bold">{cartCount}</span></button>
    </div>
  )
}
