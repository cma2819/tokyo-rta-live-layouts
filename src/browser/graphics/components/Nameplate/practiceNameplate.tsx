import React, { useContext } from 'react';
import { Nameplate } from '.';
import { ReplicantContext } from '../../../ReplicantProvider';

export const PracticeNameplate = () => {

  const player = useContext(ReplicantContext).practiceRun.player;

  return (
    <>
      {
        player && (
          <Nameplate label='PLAYER' name={player} />
        )
      }
    </>
  );
}