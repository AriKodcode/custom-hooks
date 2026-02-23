import { useState } from 'react';

export default function useToggle(defaultValue) {
  const [valueToggle, setValue] = useState(defaultValue);
  function toggle() {
    setValue(!valueToggle);
  }
  function setTrue() {
    setValue(true);
  }
  function setFalse() {
    setValue(false);
  }

  return { valueToggle, toggle, setTrue, setFalse };
}
