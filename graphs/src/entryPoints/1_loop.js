import { DataSet } from 'vis-network';

import { initializeNetwork, addAddEventListener, addNode } from '../util';

import { render } from '../react/1_loop';

const nodes = new DataSet([
  { id: 1, label: 'a' },
]);

const edges = new DataSet([
  { from: 1, to: 1 },
]);

initializeNetwork(nodes, edges);

const _addNode = () => addNode(nodes);

$(document).ready(() => {
  render(nodes, _addNode);
});
