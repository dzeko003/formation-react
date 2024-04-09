import { useEffect, useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";

function App() {
  const [showInput, setShowInput] = useState(true);

  return (
    <div className="container my-3 stack">
      <Checkbox
        checked={showInput}
        onChange={setShowInput}
        id="titleshow"
        label="Afficher le champ titre"
      />

      {showInput && <EditTitle />}
      <div style={{ height: "300vh" }}></div>
    </div>
  );
}

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstName] = useState("");
  const [y, setY] = useState(0);

  useEffect(() => {
    const originalTitle = document.title;

    return () => {
      document.title = originalTitle;
    };
  }, [title]);

useEffect(() => {
  document.title = title;
}, [title])



  useEffect(() => {
    const handler = (e) => {
      setY(window.scrollY);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="vstack gap-2">
      <Input
        placeholder="Modifier le titre"
        value={title}
        onChange={setTitle}
      />
      <Input placeholder="prenom" value={firstname} onChange={setFirstName} />

      <div>scroll : {y}</div>
    </div>
  );
}

export default App;
