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

export const addNode = nodes => {
  const allNodes = nodes.get();

  if (allNodes) {
    const greatestValue = allNodes[allNodes.length - 1];
    const nextCharIndex = alphabet.indexOf(greatestValue.label) + 1;
    const nextChar = nextCharIndex < alphabet.length && alphabet[nextCharIndex];

    if (nextChar) {
      nodes.add({ id: greatestValue.id + 1, label: nextChar });
    }
  }
};

export const addEdge = (edges, from, to) => edges.add({ from, to });

export const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export { constants };
