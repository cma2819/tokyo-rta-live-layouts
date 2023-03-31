import React, { useContext, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BundleNodecgInstance } from '../../../global';
import { ReplicantContext } from '../../../ReplicantProvider';
import { SetupText } from '../../../../nodecg/generated';

export const EditSetupText = () => {

  const repSetupText = useContext(ReplicantContext).setupText;
  const [setupText, setSetupText] = useState<SetupText>('');

  useEffect(() => {
    setSetupText(repSetupText ?? '');
  }, [repSetupText])

  const bundleNodecg = nodecg as BundleNodecgInstance;
  const submitSetupText = () => {
    bundleNodecg.Replicant('setupText').value = setupText;
  }

  return (
    <Stack spacing={2} direction='column' style={{
    }}>
      <TextField
        fullWidth
        value={setupText}
        onChange={(e) => { setSetupText(e.target.value) }}
      />
      <Button
        color='primary'
        variant='contained'
        fullWidth
        onClick={submitSetupText}
      >
        設定
      </Button>
    </Stack>);
}