import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ""])
    );
    setInputs(blankState);
  };

  return {
    handleChange,
    handleClearForm,
    inputs,
  };
}
