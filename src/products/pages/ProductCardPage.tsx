import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../shared/helpers/useFetch";
import { AddCardButton } from "../components/AddCardButton";

export const ProductCardPage = () => {
  const { id } = useParams();
  const navigation = useNavigate()
  const { data } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const goBack = () => {
    navigation(-1)
  }
  return (
    <div className="w-full flex justify-center px-20 py-10">
      {
        data && <div className="w-96 md:w-[700px] p-10 flex flex-col gap-4 items-center border-4 border-double rounded-xl border-[#808080]">
        <h1 className="text-4xl uppercase text-center">{data['title']}</h1>
        <hr className="w-full" />
        <img src={data['image']} alt={data['title']} className="w-full rounded-2xl" />
        <hr />
        <div className="w-full flex flex-row justify-between items-center">
          <p>{`${data['price']} $`}</p>
          <div className="flex flex-row items-center">
            <p>{data['rating']['rate']}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="font-semibold">{data['description']}</p>
        <div className="flex flex-row gap-20">
        <button className="bg-red-500 text-[#2d2d2d] p-2 rounded-lg font-bold transition-all duration-300 hover:bg-red-400 hover:text-[#3c3c3b]" onClick={()=>goBack()}>Go back</button>
        <AddCardButton product={data}/>
        </div>
      </div>
      }
      
    </div>
  );
};
