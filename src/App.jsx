import { useState } from "react";

function App() {

  const [count , setCount] = useState(0)
  
    const [person , setPerson] = useState({
      firstName : 'john',
      lastName : 'Doe',
      age : 18
    })


  const incrementAge = () =>{

    setPerson({...person , age:person.age +1})

  }

  const incrementCount = () =>{
      setCount(count +1)
  }

  return (
    <>
      <p> Age de {person.firstName} : {person.age}</p>
      <button onClick={incrementAge}>Gagner age</button>
      <button onClick={incrementCount}>Increment count {count}</button>
    </>
  );
}

export default App;
