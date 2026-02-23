import { useState } from 'react';

export default function useCounter(defaultValue) {
  const [valueCounter, setValue] = useState(defaultValue);
  function reset() {
    setValue(defaultValue);
  }
  function plusOne() {
    setValue(valueCounter + 1);
  }
  function minusOne() {
    setValue(valueCounter - 1);
  }
  return { valueCounter, reset, plusOne, minusOne };
}
