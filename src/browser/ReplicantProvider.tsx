import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { PracticeRun, SetupText } from '../nodecg/generated';
import { BundleNodecgInstance } from './global';

type Replicants = {
  setupText: SetupText;
  practiceRun: PracticeRun;
}

const Replicants = ['setupText', 'practiceRun'] as const;

const defaultValues: Replicants = {
  setupText: '',
  practiceRun: {
    name: '',
    player: '',
  }
} as const;

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {

  const [setupText, setSetupText] = useState<SetupText>(defaultValues.setupText);
  const [practiceRun, setPracticeRun] = useState<PracticeRun>(defaultValues.practiceRun);


  useEffect(() => {
    (nodecg as BundleNodecgInstance).Replicant('setupText', { defaultValue: defaultValues.setupText }).on('change', (newVal) => {
      setSetupText(clone(newVal));
    });
    (nodecg as BundleNodecgInstance).Replicant('practiceRun', { defaultValue: defaultValues.practiceRun }).on('change', (newVal) => {
      setPracticeRun(clone(newVal));
    });
  }, [])

  return (
    <ReplicantContext.Provider value={{
      setupText,
      practiceRun,
    }}>
      { children }
    </ReplicantContext.Provider>
  );
}