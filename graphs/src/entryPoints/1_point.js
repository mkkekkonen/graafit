import { DataSet } from 'vis-network';

import { initializeNetwork } from '../util';

const run = () => {
  console.log('Creating nodes');

  const nodes = new DataSet([
    { id: 1, label: 'a' }
  ]);

  console.log('Creating edges');

  const edges = new DataSet([]);

  console.log('Initializing network');

  initializeNetwork(nodes, edges, 'graphContainer', {
    autoResize: false,
    width: '100%',
    height: '100%',
    interaction: {
      zoomView: false,
    },
  });
};

run();
