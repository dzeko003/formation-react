import { useState } from "react";

/**
 * defaultValue permet de fixer une valeur initiale au composant
 * 
 */

function App() {
 
 const [firstName , setFirstName] = useState('john Doe')

 const handleChange = (e) => {
    setFirstName(e.target.value)
 }

 const reset = () => {
    setFirstName('')
 }

  return (
  <form>
    <input type="text" name="firstname" value={firstName} onChange={handleChange} />
    {firstName}
    <button type="button" onClick={reset}>reset</button>
  </form>
   
  );
}




export default App;
