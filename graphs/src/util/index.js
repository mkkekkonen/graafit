import { Network } from 'vis-network';
import * as constants from './constants';

const defaultOptions = {
  autoResize: false,
  width: '100%',
  height: '100%',
  interaction: {
    zoomView: false,
  },
};

export const initializeNetwork = (nodes, edges, elementId = constants.defaultElementId, options = {}) => {
  const container = document.getElementById(elementId);

  const data = { nodes, edges };

  return new Network(container, data, { ...defaultOptions, ...options });
};

export { constants };
