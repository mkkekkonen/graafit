import { DataSet } from 'vis-network';

import { initializeNetwork } from '../util';

const run = () => {
  const nodes = new DataSet([
    { id: 1, label: 'a' },
    { id: 2, label: 'b' },
  ]);

  const edges = new DataSet([
    { from: 1, to: 2 },
  ]);

  initializeNetwork(nodes, edges);
};

run();
