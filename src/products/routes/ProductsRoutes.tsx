import { Route, Routes } from "react-router-dom"
import { ProductPage } from "../pages/ProductPage"
import { ProductCardPage } from "../pages/ProductCardPage"

export const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage/>}  />
      <Route path="/:id" element={<ProductCardPage/>}/>
    </Routes>
  )
}
