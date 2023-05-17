import { useState } from 'react';

const useInput = <T>(initialState: T) => {
  const [value, setValue] = useState<T | string>(initialState);

  const changeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  return [value, changeValue, setValue] as const;
};

export default useInput;
