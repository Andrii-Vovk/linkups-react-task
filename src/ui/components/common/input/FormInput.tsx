import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';

export interface InputProps {
    name: string;
    placeholder?: string;
    label?: string;
    validations?: {
        minLen?: number;
        maxLen?: number;
        reqired?: boolean;
        email?: boolean;
        password?: boolean
    }
    setStateFunction(state: unknown): void;
}

interface formValues {
    inputValue: string;
  }
 
const Input: React.FC<InputProps> = ({name, placeholder, label, validations}) => {



    return ( 
        <>
            {
                
            }
        </>
     );
}
 
export default Input;