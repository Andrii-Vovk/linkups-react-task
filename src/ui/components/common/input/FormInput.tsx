import { FieldHookConfig, useField } from "formik";
import React from "react";

interface FormInputProps {
  name: string;
  labelText?: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps & FieldHookConfig<string>> = ({
    placeholder,
  type = "text",
  labelText,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name}>
        {labelText}
        <input type={type} {...field} placeholder={placeholder} className="standart-input" />
      </label>
      <div className="validation">{meta.touched && meta.error && <div className="subtext">{meta.error}</div>}</div>
      </>
  );
};

export default FormInput;
