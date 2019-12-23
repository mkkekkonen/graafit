import { DataSet } from 'vis-network';

import { initializeNetwork } from '../util';

const run = () => {
  const nodes = new DataSet([
    { id: 1, label: 'a' },
    { id: 2, label: 'b' },
    { id: 3, label: 'c' },
    { id: 4, label: 'd' },
  ]);

  const edges = new DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3},
    { from: 1, to: 4 },
    { from: 3, to: 4 },
  ]);

  initializeNetwork(nodes, edges);
};

run();
