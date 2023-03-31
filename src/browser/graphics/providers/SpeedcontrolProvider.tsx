import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RunDataActiveRunSurrounding, RunDataArray, SpeedcontrolInstance, SpeedcontrolReplicantName, Timer } from '../../../nodecg/speedcontrol';
import clone from 'clone';
import { RunData } from '../../../nodecg/external/speedcontrol';

export const SpeedcontrolContext = createContext<{
  runDataArray: RunDataArray;
  timer: Timer|null;
  runDataActiveRunSurrounding: RunDataActiveRunSurrounding;
}>({
  runDataArray: [],
  timer: null,
  runDataActiveRunSurrounding: {},
});

type Props = {
  children: ReactNode;
};

export const SpeedcontrolProvider = ({ children }: Props) => {

  const [ runDataArray, setRunDataArray ] = useState<RunDataArray>([]);
  const [ timer, setTimer ] = useState<Timer|null>(null);
  const [ runDataActiveRunSurrounding, setRunDataActiveRunSurrounding ] = useState<RunDataActiveRunSurrounding>({});
  
  useEffect(() => {
    
    const mutations: Array<[SpeedcontrolReplicantName, React.Dispatch<any>]> = [
      ['runDataArray', setRunDataArray],
      ['timer', setTimer],
      ['runDataActiveRunSurrounding', setRunDataActiveRunSurrounding],
    ];

    mutations.forEach(([name, mutator]) => {
      const replicant = (nodecg as SpeedcontrolInstance).Replicant(name, 'nodecg-speedcontrol');
    
      replicant.on('change', (newVal) => {
        mutator(clone(newVal));
      });
    });
  }, []);
  
  return (
    <SpeedcontrolContext.Provider value={{
      runDataArray,
      timer,
      runDataActiveRunSurrounding,
    }}>
      { children }
    </SpeedcontrolContext.Provider>
  )
}