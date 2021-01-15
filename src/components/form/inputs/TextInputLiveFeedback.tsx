import * as React from "react";
import { useField } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

type FormikTextFieldProps = {
  formikKey: string;
} & TextFieldProps;

const TextInputLiveFeedback = ({ label, ...props }: FormikTextFieldProps) => {
  const [field, meta] = useField(props.formikKey);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <TextField
      {...props}
      {...field}
      aria-describedby={`${props.formikKey}-feedback ${props.formikKey}-help`}
      onFocus={handleFocus}
      helperText={meta.error && showFeedback ? meta.error : props.helperText}
      error={!!meta.error}
    />
  );
};

export default TextInputLiveFeedback;
