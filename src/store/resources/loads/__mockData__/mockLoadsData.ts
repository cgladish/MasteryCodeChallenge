import { Load, LoadsById } from '../state';

import loads from './loads.json';

export const mockLoads = loads as Load[];
export const mockLoad = loads[0] as Load;
export const mockLoadsById: LoadsById = {};

loads.forEach(load => (mockLoadsById[load.id] = load as Load));
