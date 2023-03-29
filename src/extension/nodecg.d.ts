import {NodeCG} from '../../../../types/server'
import {CreateNodecgInstance} from 'ts-nodecg/server';

import {ReplicantMap} from '../nodecg/replicants';
import {MessageMap} from '../nodecg/messages';
import {Configschema} from '../nodecg/generated/configschema';

export type NodeCG = CreateNodecgInstance<
	'tokyo-rta-live-layouts',
	Configschema,
	ReplicantMap,
	MessageMap
>;