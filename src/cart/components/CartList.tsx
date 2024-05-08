import { toast } from "sonner"
import { Product } from "../../products/interfaces/Product"
import { removeFromCart } from "../../redux/features/productSlice"
import { useAppDispatch } from "../../redux/hooks"

interface Props{
  products: Product[]
}

export const CartList = ({products}:Props) => {
  const dispatch = useAppDispatch()
  const removeItem = (item:Product) => {
    dispatch(removeFromCart(item))
    toast.success('A product was removed from your cart!')
  }
  return (
    <div className="w-full flex flex-col gap-2">
          {products.map((item, index) => (
            <div key={item.id} className="w-full flex flex-row justify-between">
              <span className="w-[300px]">
                {index + 1}. {item.title}
              </span>
              <div className="flex flex-row gap-2 items-center">
                <span className="text-blue-300">{"x" + item.qty}</span>
                <button onClick={()=>removeItem(item)}><img src="./images/remove.svg" alt={item.title} /></button>
              </div>
            </div>
          ))}
        </div>
  )
}
