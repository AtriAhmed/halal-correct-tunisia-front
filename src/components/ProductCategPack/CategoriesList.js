import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function CategoriesList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("/api/get-categories-with-products")
      .then(res => {
        setProducts(res.data.data)
      })
      .catch(err => {
        
      })
  }, [])

  return (
    <div className="w-full">
      <div className="w-fit scr800:w-full max-w-w1300 mx-auto px-8 pt-6 pb-10 ">
        <div className="grid grid-cols-1 scr800:grid-cols-2 gap-6">
          {products?.map(( items ) => {
            return (
              <FadeUpOnScroll key={items[0][0].category.id}>
                <section key={items[0][0].category.id} className="w-fit">
                  <h3 className="font-open font-bold text-3xl text-teal-500">
                    Categorie: {items[0][0].category.name}
                  </h3>
                  <ul className="px-8 pt-4 list-disc">
                    {items[0].map(product => (
                      <li key={product.id}>{product.name}</li>
                    ))}
                  </ul>
                </section>
              </FadeUpOnScroll>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoriesList
