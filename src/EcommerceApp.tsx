import { Toaster } from "sonner"
import { EcommerceRoutes } from "./EcommerceRoutes"
import { Navbar } from "./shared"

export const EcommerceApp = () => {
  return (
    <>
    <Toaster richColors position="bottom-left"/>
    <Navbar/>
    <EcommerceRoutes />
    </>
  )
}
