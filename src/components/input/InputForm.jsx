import React, { Fragment } from "react";
import { useController } from "react-hook-form";

const InputForm = ({ control, name, type = "text", ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder=""
        className="w-full p-3 border border-transparent rounded outline-none placeholder:capitalize focus:bg-transparent bg-opacity-20 bg-textColor focus:border-yellow "
        {...field}
        {...rest}
      />
    </div>
  );
};

export default InputForm;
