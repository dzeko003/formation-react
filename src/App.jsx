import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";

function App() {

  const prefixRef = useRef(null)
  const [prefix , setPrefix] = useState('')
  prefixRef.current = prefix

  useEffect(() => {
   const timer = setInterval(() => {
      console.log(prefixref.current);
   }, 1000)

   return () => {
    clearInterval(timer)
   }
  },[])

  return (
    <div ref={ref}>
      <Input label="prefix" onChange={setPrefix}/>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ullam eius
      excepturi dolorem tempora beatae, at accusantium. Eligendi error iure
      assumenda ipsum sint corrupti architecto animi itaque reprehenderit,
      perspiciatis iusto.
    </div>
  );
}

export default App;
