import { useState } from "react";
import { Input } from "./components/forms/input";


function App() {
  return (
    <>
      <EditTitle />
    </>
  );
}

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstName] = useState("");

  return (
    <div className="vstack gap-2">

      <Input
       placeholder="Modifier le titre"
       value={title}
       onChange={setTitle}
      />
      <Input placeholder="prenom" value={firstname} onChange={setFirstName} />
    </div>
  );
}

export default App;
