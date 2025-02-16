import { useState } from "react"
import Circle from "./components/Circle"

function App() {
  const [ items, setItems ] = useState([
    { min: 1, max: 10, value: 2 },
    { min: 1, max: 5, value: 2 },
    { min: 1, max: 8, value: 2 }
  ]);

  function changeItem(i, value){
    setItems(items.with(i, { ...items[i], value }));

    /* items[i].value = value */
    /* const newItems = [...items];
    newItems[i] = { ...items[i], value }
    setItems(newItems) 

    setItems(items.map((item, iter) => iter !== i ? item : ({ ...item, value }))) */
  }

  return <div className="container py-2">
    <div>
      { items.map(({ min, max, value }, i) => <Circle 
        min={min} 
        max={max}
        value={value} 
        changed={newValue => changeItem(i, newValue)}
        key={i}
      />) }
    </div>
  </div>
}

export default App
