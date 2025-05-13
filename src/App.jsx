import './App.css'
import Product from './components/product'

function App() {
  const product = [
    {title:"Mustang", 
      price:"180,000",
      image:"https://media.istockphoto.com/id/862415786/photo/classic-black-car-in-garage.jpg?s=612x612&w=0&k=20&c=M7I0OAEhCNVXUZ38v9zHO5AACW-QdNbYumH89VB-Utc=",
      description:"Black Ford Mustang"
    },
    {title:"Mustang", 
      price:"200,000",
      image:"https://images.unsplash.com/photo-1544896478-d5b709d413c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnMlMjBtdXN0YW5nc3xlbnwwfHwwfHx8MA%3D%3D",
      description:"Red Ford Mustang"
    },
  ];
  
  return <section>
    {
      product.map((product, index) => {
        return <Product
        key={index}
        title={product.title}
        price={product.price}
        image={product.image}
        description={product.description}
        />
      })
    }
    {/* <Product title="Mustang" price="180,000" image="https://media.istockphoto.com/id/862415786/photo/classic-black-car-in-garage.jpg?s=612x612&w=0&k=20&c=M7I0OAEhCNVXUZ38v9zHO5AACW-QdNbYumH89VB-Utc=" description="Black Ford Mustang"/>
    <Product title="Mustang" price="200,000" image="https://images.unsplash.com/photo-1544896478-d5b709d413c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnMlMjBtdXN0YW5nc3xlbnwwfHwwfHx8MA%3D%3D" description="Red Ford Mustang"/> */}
  </section>
}

export default App
