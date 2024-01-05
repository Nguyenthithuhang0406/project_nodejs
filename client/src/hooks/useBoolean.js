import { useState } from "react";

function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(!value);

  return { value, setTrue, setFalse, toggle };
}

export default useBoolean;