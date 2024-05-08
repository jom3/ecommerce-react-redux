import { useAppDispatch} from "../../redux/hooks"
import { Product } from "../interfaces/Product"
import { addToCart } from '../../redux/features/productSlice'
import { toast } from "sonner"


interface Props {
  product:Product
}

export const AddCardButton = ({product}:Props) => {

  const dispatch = useAppDispatch()

  const addCart = (product:Product) => {
    dispatch(addToCart({...product}))
    toast.success('The product was added into your cart!' )
  } 

  return (
    <button className="bg-blue-500 text-[#2d2d2d] p-2 rounded-lg font-bold transition-all duration-300 hover:bg-blue-400 hover:text-[#3c3c3b]" onClick={()=>addCart(product)}>Add to cart</button>
  )
}
