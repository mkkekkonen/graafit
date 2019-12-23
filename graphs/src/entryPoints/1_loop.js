import { DataSet } from 'vis-network';

import { initializeNetwork, addAddEventListener } from '../util';

const nodes = new DataSet([
  { id: 1, label: 'a' },
]);

const edges = new DataSet([
  { from: 1, to: 1 },
]);

initializeNetwork(nodes, edges);

$(document).ready(() => {
  addAddEventListener(nodes);
});
