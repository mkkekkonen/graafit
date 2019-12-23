import React from 'react';
import ReactDOM from 'react-dom';

import { AddEdge, AddNode } from '../components';

class Component extends React.Component {
  render() {
    const { nodes, addNode } = this.props;

    return (
      <div>
        <AddNode
          addNodeCallback={addNode}
        />
        {/* <AddEdge
        /> */}
      </div>
    );
  }
}

export const render = (nodes, addNode, addEdge) => {
  ReactDOM.render(
    <Component
      nodes={nodes}
      addNode={addNode}
      addEdge={addEdge}
    />,
    document.getElementById('reactContainer'),
  );
};
