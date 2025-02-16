import { useState } from 'react'

function App() {
  const [ cnt, setCnt ] = useState(0);
  const [ name, setName ] = useState('');

  return <div>
    <div onClick={() => setCnt(cnt + 1)}>{ cnt }</div>
    <input value={name} onChange={e => setName(e.target.value)} />
    <h2>Hello, {name}</h2>
  </div>
}

export default App

/*
will render cmp App

first time, create 1{}
dispatcher = 1{}App
App()
  useState(0)       -> {} => 1{ hooksV: [ us(0) ]  }
  useState('')      -> 1{ hooksV: [ us(0), us('') ]  }

dispatcher = null

will App rerender
dispatcher = 1{}App

App()
  useState(0)   <- 1{ hooksV: [ us(<<<<<-VALUE), us('') ]  }
  useState('')   <- 1{ hooksV: [ us(0), us(<<<<<-VALUE) ]  }
dispatcher = null
*/

/* window.magicStorage = {};

window.regOnce = (key, n) => {
  if(magicStorage[key] === undefined){
    magicStorage[key] = n
  }

  return magicStorage[key];
}

 */