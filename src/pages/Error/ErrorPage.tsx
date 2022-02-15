import React from 'react';
import { Grid } from '@mui/material';

interface IErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<IErrorPageProps> = ({ message }): JSX.Element => (
  <Grid container>
    <Grid>
      <p>{message}</p>
    </Grid>
  </Grid>
);

export default ErrorPage;
