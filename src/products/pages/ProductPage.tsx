import { useFetchProducts } from "../../shared/helpers/useFetchProducts";
import { ProductList } from '../components/ProductList';

export const ProductPage = () => {

  const {data, loading} = useFetchProducts('https://fakestoreapi.com/products')

  return (
    <div className="w-full px-5 py-10 flex flex-col gap-10 items-center">
      <h1 className="text-2xl uppercase font-semibold">All products</h1>
      <div className="w-full p-5 flex justify-between gap-5 flex-wrap">
        {
          !loading && <ProductList products={data} />
        }
      </div>
    </div>
  )
}
