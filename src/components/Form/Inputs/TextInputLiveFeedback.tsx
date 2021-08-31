import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

type FormikTextFieldProps = {
  formikKey: string;
} & TextFieldProps;

const TextInputLiveFeedback = ({ label, formikKey, ...props }: FormikTextFieldProps) => {
  const [field, meta] = useField(formikKey);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = (didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <TextField
      {...props}
      {...field}
      aria-describedby={`${formikKey}-feedback ${formikKey}-help`}
      onFocus={handleFocus}
      helperText={meta.error && showFeedback ? meta.error : props.helperText}
      error={!!meta.error}
    />
  );
};

export default TextInputLiveFeedback;
