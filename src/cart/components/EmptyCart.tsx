import { Link } from "react-router-dom"

export const EmptyCart = () => {
  return (
    <div className="w-[400px] border-4 border-double  rounded-xl p-5 flex flex-col gap-5">
      <p className="text-blue-300 text-justify">The cart shopping is going to show you if you add a new product in you personal cart, please click on the button to go there, thanks!</p>
      <Link to={'/products'} className="bg-blue-500 text-[#2d2d2d] p-2 rounded-lg font-bold transition-all duration-300 hover:bg-blue-400 hover:text-[#3c3c3b] text-center">Add new product</Link>
    </div>
  )
}
