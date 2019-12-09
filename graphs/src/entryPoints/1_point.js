import { DataSet } from 'vis-network';

import { initializeNetwork } from '../util';

const run = () => {
  const nodes = new DataSet([
    { id: 1, label: 'a' }
  ]);

  const edges = new DataSet([]);

  initializeNetwork(nodes, edges);
};

run();
