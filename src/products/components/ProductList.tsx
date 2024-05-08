import { Product } from "../interfaces/Product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[] | undefined;
}

export const ProductList = ({ products }: Props) => {
  return (
      <div className="w-full flex flex-row flex-wrap gap-10 justify-evenly">
        {products?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
  );
};
