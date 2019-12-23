import { DataSet } from 'vis-network';

import { initializeNetwork, addAddEventListener, addNode, addEdge } from '../util';

import { render } from '../react/1_loop';

const nodes = new DataSet([
  { id: 1, label: 'a' },
]);

const edges = new DataSet([
  { from: 1, to: 1 },
]);

initializeNetwork(nodes, edges);

const _addNode = () => {
  addNode(nodes);
  _render();
};
const _addEdge = (from, to) => addEdge(edges, from, to);

const _render = () => {
  render(nodes, _addNode, _addEdge);
};

$(document).ready(() => {
  _render();
});
