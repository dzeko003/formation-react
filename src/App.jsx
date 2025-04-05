import { useState } from "react";

/**
 * defaultValue permet de fixer une valeur initiale au composant
 * 
 */

function App() {
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target));
    
  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" name="firstname" defaultValue="christ" />
    <button>Envoyer</button>
  </form>
   
  );
}




export default App;
