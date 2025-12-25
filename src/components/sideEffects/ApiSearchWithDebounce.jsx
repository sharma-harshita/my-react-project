import React, {useEffect, useState} from 'react';

export default function ApiSearchWithDebounce(){

    const [products, setProducts] = useState()
    const [search, setSearch] = useState("")

    useEffect(()=>{

        const timer = setTimeout(()=>{
            let url = "https://dummyjson.com/products"

            if(search !== ""){
                url = `https://dummyjson.com/products/search?q=${search}`
            }
            async function fetchProd(){
                const res = await fetch(url);
                const data = await res.json()
                setProducts(data.products)
            }
            fetchProd()

        }, 1000)

        return()=>{
            clearTimeout(timer)
        }
    }, [search])
    return(
        <div>
            <h1>API call inside search bar </h1>
            <h1>DEBOUNCE</h1>
            <input
                type="text"
                placeholder='Search Products...'
                value={search}
                onChange={()=>setSearch(event.target.value)}
            />

            {products?.map((p, item)=>{
                return(
                    <div>
                        {p.title}
                    </div>
                )
            })}
        </div>
    )
}


lodash.debounce