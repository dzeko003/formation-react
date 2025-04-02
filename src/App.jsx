import { useState } from "react";

function App() {
 
  /**
   * On branche event listener (ecouteur d'evenement)
   * Les hook ne peuvent pas être déclaré dans une condition
   * 
   */

  const [count , setCount] = useState(0);

  const [person , setPerson] = useState({
    firstName: 'john',
    lastName : 'Doe',
    age : 18 
  })

  const increment = () => {
    setCount((count) => count + 1 );
  }

  const incrementAge = () => {
    setPerson({...person , age : person.age + 1})
  }

  return (
    <>
     <p>compteur : {count} </p>
     <button onClick={increment}>Incrémenter</button>

     <p>Age de {person.firstName} : {person.age} </p>
     <button onClick={incrementAge}>Augmenter l'âge</button>

    </>
   
  );
}




export default App;
