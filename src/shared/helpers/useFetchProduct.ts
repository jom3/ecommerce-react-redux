import { useEffect, useState } from "react"
import { Product } from "../../products/interfaces/Product"

const initialValue:Product = {
  title:'',
  description:'',
  category:'',
  id:0,
  image:'',
  price:0,
  qty:0,
  rating:{
    count:0,
    rate:0
  }
}

export const useFetchProduct = (url:string) => {
  const [data, setData] = useState<Product>(initialValue)
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