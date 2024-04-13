import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";



function App() {
  const {count, decrement, increment} = useIncrement({
    base:0,
    max:10,
    min:0
  })

  const [name , setName] = useState('')

  useDocumentTitle(name ? `Editer ${name}` : null)

  return <div>
        <Input value={name} onChange={setName} label="Nom" />
        Compteur {count}
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Décrémenter</button>
  </div>
}

export default App;
