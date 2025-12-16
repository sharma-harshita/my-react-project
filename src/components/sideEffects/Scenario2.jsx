import React, {useEffect} from 'react';

export default function Scenario2 () {

    useEffect(()=>{
        document.title = "React Hooks"
    }, [])

    useEffect(()=>{
        async function fetchProductData (){
            const response = await fetch("https://dummyjson.com/products");
            const productsData = await response.json()
            console.log(productsData);
        }

        fetchProductData()
    }, [])

    return(
        <div>
            <h1>useEffect with empty dependency array</h1>
        </div>
    )
}