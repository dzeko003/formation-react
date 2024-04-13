import { useEffect, useMemo, useRef, useState , memo } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { useFetch } from "./hooks/useFetch.js";

function App() {
  const [name, setName] = useState("");

  // console.log(
  //   <div className="container my-2 vstack gap-2">
  //     <div>
  //       <Input label="Prénom" onChange={setName} value={name} />
  //       <div>{name.toUpperCase()}</div>
  //     </div>
  //   </div>
  // );

  console.log('App' , 'render');

  return <div className="container my-2 vstack gap-2">
    <div>
      <Input label="Prénom" onChange={setName} value={name}/>
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    <InfoMemo/>
  </div>
}

const InfoMemo = memo( function Info(){
  // waitSync(500)
  console.log('Info' , 'render');
  return <div className="alert alert-info">
    Lorem ipsum dolor, sit amet consectetur adipisicing
     elit. Eligendi porro, laudantium eius perspiciatis ut
      vel dolorem provident veniam cumque corrupti libero nobis molestias delectus quis voluptatum at aliquam, aut quidem!
  </div>
})
export default App;
