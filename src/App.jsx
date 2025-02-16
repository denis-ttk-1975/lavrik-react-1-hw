import { useState } from "react"

function App() {
  const [ products ] = useState(stub());
  const [ cart, setCart ] = useState([]);

  const total = products.reduce(
    (total, pr) => total + (cart.includes(pr.id) ? pr.price : 0),
    0
  );

  function addToCart(id){
    setCart([...cart, id])
  }

  function removeFromCart(id){
    setCart(cart.filter(pid => pid !== id))
  }

  return <div className="container py-2">
    <div className="row">
      { products.map(pr => <div key={pr.id} className="col col-4 mb-3">
        <h2>{pr.title}</h2>
        <div className="alert">{pr.price}</div>
        { cart.includes(pr.id) 
          ? <button onClick={() => removeFromCart(pr.id)} className="btn btn-danger">Remove</button>
          : <button onClick={() => addToCart(pr.id)} className="btn btn-success">Add to cart</button> }
      </div>) }
    </div>
    <hr/>
    <h2>Total: { total }</h2>
  </div>
}

export default App

function stub(){
  return [
    {"id":100,"title":"Ipnone 200","price":12000,"rest":10},
    {"id":101,"title":"Samsung AAZ8","price":22000,"rest":5},{"id":103,"title":"Nokia 3310","price":5000,"rest":2},{"id":105,"title":"Huawei XZ","price":15000,"rest":8},{"id":106,"title":"Ipnone XX","price":14000,"rest":8},{"id":107,"title":"Samsung XZ","price":22000,"rest":5},{"id":108,"title":"Nokia 111","price":7000,"rest":2},{"id":110,"title":"Huawei XZ","price":10000,"rest":5},{"id":120,"title":"NoPhone","price":30000,"rest":2}]
}