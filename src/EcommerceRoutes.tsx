import { CartRoutes } from "./cart/routes/CartRoutes"
import { ProductsRoutes } from "./products/routes/ProductsRoutes"
import { Navigate, Route, Routes } from "react-router-dom"

export const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="products/*" element={<ProductsRoutes/>} />
      <Route path="cart/*" element={<CartRoutes/>} />
      <Route path="/*" element={<Navigate to="/products" />} />
    </Routes>
  )
}
