import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { useFetch } from "./hooks/useFetch.js";



function App() {
  
  const {loading , data , errors} = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=5000");

  return <div>
        {loading && <div>Chargement...</div>}
        {errors && <div className="alert alert-danger">{errors.toString()}</div>}
        {data && <div>
            <ul>
              {data.map(post =>(<li key={post.id}>{post.title}</li>))}
            </ul>
          </div>}
  </div>
}

export default App;
