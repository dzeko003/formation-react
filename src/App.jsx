import { useEffect, useMemo, useRef, useState , memo, useCallback } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { useFetch } from "./hooks/useFetch.js";

function App() {
  const [name, setName] = useState("");

  // console.log('App' , 'render');

  const nameRef = useRef(name)
  nameRef.current = name

  const handleClick = useCallback( () => {
    console.log(nameRef.current);
  }, [])

  return <div className="container my-2 vstack gap-2">
    <div>
      <Input label="Prénom" onChange={setName} value={name}/>
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    <InfoMemo onClick = {handleClick} />
  </div>
}

const InfoMemo = memo( function Info({onClick}){
  // waitSync(500)
  console.log('Info' , 'render');
  return <div className="alert alert-info" onClick={onClick}>
    Lorem ipsum dolor, sit amet consectetur adipisicing
     elit. Eligendi porro, laudantium eius perspiciatis ut
      vel dolorem provident veniam cumque corrupti libero nobis molestias delectus quis voluptatum at aliquam, aut quidem!
  </div>
})
export default App;
