import { useState } from "react";

type TUseForm = {
  [name: string]: string;
};

export const useForm = (inputValues: TUseForm) => {
  const [values, setValues] = useState(inputValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
  };

  return { values, setValues, handleChange };
};
