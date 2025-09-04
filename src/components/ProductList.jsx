import ProductCard from "./ProductCard";

export default function ProductList (){
    return(
        <div>
            <h1>Product List component</h1>
            <ProductCard name="Tshirt" price="20"/>
            <ProductCard name="shirts" price="50"/>
            <ProductCard name="pants" price="60"/>
            <ProductCard name="trousers" price="80"/>
            <ProductCard name="tops"/>
        </div>
    )
}