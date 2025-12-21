import React, {useState, useEffect} from 'react'

export default function ServerEffect () {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [products, setProducts] = useState()

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const response = await fetch ("https://dummyjson.com/products");
                const productsData = await response.json()
                
                setProducts(productsData.products)
                setLoading(false)
            } catch(err){
                setError("Failed to fetch the products")
                setLoading(false)
            }
        }

        fetchProducts()
    })

    if (loading) return <h1>Loading data .....</h1>
    if (error) return <h1>{error}</h1>

    return(
        <div>
            <h1>useEffect API implementation</h1>
            {products.map((product, key)=>{
                return(
                    <div>
                        {product.title}
                    </div>
                )
            })}
        </div>
    )
}


//loading
//error handling
//display data