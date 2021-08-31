import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import TextInputLiveFeedback from '../components/Form/Inputs/TextInputLiveFeedback';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type FormValues = {
  username: string;
};

const Forms: React.FC = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: async (values: FormValues) => {
      await sleep(500);
      // eslint-disable-next-line
      console.warn(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .test(
          'test-username',
          'Username cannot be test',
          (value) => value !== 'test',
        )
        .min(8, 'Must be at least 8 characters')
        .max(20, 'Must be less  than 20 characters')
        .required('Username is required')
        .matches(
          /^[a-zA-Z0-9]+$/,
          'Cannot contain special characters or spaces',
        ),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextInputLiveFeedback
              fullWidth
              label="Username"
              id="username"
              name="username"
              formikKey="username"
              helperText="Must be 8-20 characters and cannot contain special characters."
              type="text"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Form>
    </FormikProvider>
  );
};

export default Forms;
