import { useEffect, useMemo, useRef, useState, memo, useCallback, lazy, Suspense } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { useFetch } from "./hooks/useFetch.js";
import { createPortal } from "react-dom";

function App() {
  const {page , param} = useHashNavigation();
  const getPageContent = getPageContent(page, param);

  return (
    <>
      <Header page={page} />
      <div className="container my-2">{pageContent}</div>
    </>
  );
}

function getPageContent(page, param) {

  if (page === "home") {
    return <Home />;
  }

  if (page === "post") {
    const SingleLazy = lazy(() => import('./pages/Single'))
    return <Suspense fallback={<div>Chargement des composants en cours</div>}>
      <SingleLazy postId={param} />;
      </Suspense>
  }

  if (page === "contact") {
    return <Contact />;
  }

  return <NotFound page={page} />;
}

export default App;
