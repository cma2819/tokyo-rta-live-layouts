import './common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React, { ReactNode } from 'react';
import { SpeedcontrolProvider } from './providers/SpeedcontrolProvider';
import { ClippedBackground } from './components/ClippedBackground';
import { ReplicantProvider } from '../ReplicantProvider';

type Props = {
  backgroundImage: string;
  children: ReactNode;
};

export const GraphicsApp = ({ backgroundImage, children }: Props) => {

  return (
    <SpeedcontrolProvider>
      <ReplicantProvider>
        <ClippedBackground backgroundImage={backgroundImage} />
        { children }
      </ReplicantProvider>
    </SpeedcontrolProvider>
  );
}
