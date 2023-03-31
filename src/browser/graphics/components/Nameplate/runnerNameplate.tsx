import React from 'react';
import { Nameplate } from '.';
import { useCurrentRun } from '../../hooks/useSpeedcontrol';

export const RunnerNameplate = () => {

  const run = useCurrentRun();
  const runner = run?.teams.at(0)?.players.at(0);

  return (
    <>
      {
        runner && (
          <Nameplate label='RUNNER' name={runner.name} />
        )
      }
    </>
  );
}