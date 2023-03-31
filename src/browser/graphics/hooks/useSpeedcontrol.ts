import { useContext } from 'react'; 
import { RunData, Timer } from '../../../nodecg/external/speedcontrol';
import { SpeedcontrolContext } from '../providers/SpeedcontrolProvider';

export const useCurrentRun = (): RunData | undefined => {

  const speedcontrol = useContext(SpeedcontrolContext);

  const current = speedcontrol.runDataActiveRunSurrounding.current;
  return current ? speedcontrol.runDataArray.find(run => run.id === current) : undefined;
}

export const useTimer = (): Timer | undefined => {

  const speedcontrol = useContext(SpeedcontrolContext);

  return speedcontrol.timer ?? undefined;
}