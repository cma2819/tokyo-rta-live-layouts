import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material';
import { ReplicantProvider } from '../../ReplicantProvider';
import { DashboardThemeProvider } from '../DashboardThemeProvider';
import { PracticeControl } from '../components/PracticeControl';

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PracticeControl />
          </Grid>
        </Grid>
      </ReplicantProvider>
    </DashboardThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));