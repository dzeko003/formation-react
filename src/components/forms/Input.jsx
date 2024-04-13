/**
 * 
 * @param {*} param0 
 * @returns 
 */

import { useId } from "react";

export function Input({ placeholder, value, onChange , label }) {
  const id = useId()
  return (
    <div>
      <label className="form-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
