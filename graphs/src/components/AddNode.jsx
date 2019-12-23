import React from 'react';

export class AddNode extends React.Component {
  render() {
    const { addNodeCallback } = this.props;

    return (
      <div>
        <button onClick={addNodeCallback}>Add node</button>
      </div>
    );
  }
}
