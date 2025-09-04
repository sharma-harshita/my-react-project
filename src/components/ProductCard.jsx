export default function ProductCard({name, price= 10}) {
    return(
        <div>
            <div>Product Name: {name}</div>
            <div>Product Price: {price}</div>
        </div>
    )
}

//  props destructuring
// how to set the default value of props