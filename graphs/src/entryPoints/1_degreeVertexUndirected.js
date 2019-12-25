import { DataSet } from 'vis-network';

import * as util from '../util';

import { render as reactRender } from '../react/1_degreeVertexUndirected';

const nodes = new DataSet(util.createNodes(5));

const edges = new DataSet([
  { from: 1, to: 2 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 2, to: 3 },
]);

util.initializeNetwork(nodes, edges);

const addNode = () => {
  util.addNode(nodes);
  render();
};

const addEdge = (from, to) => util.addEdge(edges, from, to);

const render = () => reactRender(nodes, addNode, addEdge);

$(document).ready(() => {
  render();
});

