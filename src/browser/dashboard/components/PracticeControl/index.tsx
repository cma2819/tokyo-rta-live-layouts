import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ReplicantContext } from '../../../ReplicantProvider';
import { BundleNodecgInstance } from '../../../global';

export const PracticeControl = () => {

  const practiceRep = useContext(ReplicantContext).practiceRun;

  const [player, setPlayer] = useState<string>();
  const [text, setText] = useState<string>();

  useEffect(() => {
    setText(practiceRep.name);
    setPlayer(practiceRep.player);
  }, [practiceRep]);

  const submitPracticeRun = () => {
    (nodecg as BundleNodecgInstance).Replicant('practiceRun').value = {
      name: text ?? '',
      player: player ?? '',
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label='プレイヤー名'
          variant='outlined'
          value={player}
          onChange={(e) => { setPlayer(e.currentTarget.value)} }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='テキスト'
          variant='outlined'
          value={text}
          onChange={(e) => { setText(e.currentTarget.value)} }
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          color='primary'
          fullWidth
          variant='contained'
          onClick={submitPracticeRun}
        >
          設定
        </Button>
      </Grid>
    </Grid>
  )
}