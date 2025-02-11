export default function Product (){
    // const products = ["Laptop", "Mobile", "Tablet", "Camera", "Headphone", "Cables"];
    
    const products = [
        {id: 1, name: "Laptop", price: 1000},
        {id: 2, name: "Mobile", price: 800},
        {id: 3, name: "Tablet", price: 600},
        {id: 4, name: "Camera", price: 400},
        {id: 5, name: "Headphones", price: 200},
        {id: 6, name: "Cables", price: 200},
        {id: 7, name: "Laptop", price: 1000},
    ]

    const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pineapple"];



    const productList = products.map((product)=>(
        <h3 key={product.id}>{product.name}: ${product.price}</h3>
    ))

    
    const fruitList = fruits.map((fruit, index)=>(
        <h3 key={index}>{fruit}</h3>
    ))

    return (
        <div>
            {productList}
            {fruitList}
        </div>
    )
}