import { Network } from 'vis-network';
import * as constants from './constants';

export const initializeNetwork = (nodes, edges, elementId = constants.defaultElementId, options = {}) => {
  const container = document.getElementById(elementId);

  const data = { nodes, edges };

  return new Network(container, data, options);
};

export { constants };
