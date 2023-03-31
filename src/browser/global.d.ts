import { CreateNodecgConstructor, CreateNodecgInstance } from 'ts-nodecg/browser';
import { ReplicantMap } from '../nodecg/replicants';
import { SpeedcontrolConstructor, SpeedcontrolInstance } from '../nodecg/speedcontrol';

export type BundleNodecgInstance = CreateNodecgInstance<
  'tokyo-rta-live-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

export type BundleNodecgConstructor = CreateNodecgConstructor<
  'tokyo-rta-live-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

declare global {
  const nodecg: BundleNodecgInstance | SpeedcontrolInstance;

  const NodeCG: BundleNodecgConstructor | SpeedcontrolConstructor;
}