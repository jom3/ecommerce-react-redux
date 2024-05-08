import { useEffect, useState } from "react"
import { Product } from "../../products/interfaces/Product"

export const useFetch = (url:string) => {
  const [data, setData] = useState<Product>()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch(url)
    .then(response=>response.json())
    .then(data=>setData(data))
    .finally(()=>setLoading(false))
  },[url])

  return {data, loading}
}