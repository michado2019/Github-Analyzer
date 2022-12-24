import { useState } from "react";

export default function useForm(initial = '') {
  const [inputs, setInputs] = useState(initial);

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    setInputs(e.target.value);
  };

  return {
    handleChange,
    inputs,
  };
}