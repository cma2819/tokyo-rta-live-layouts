import { CreateNodecgConstructor, CreateNodecgInstance } from 'ts-nodecg/browser';

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
  const nodecg: BundleNodecgInstance;

  const NodeCG: BundleNodecgConstructor;
}