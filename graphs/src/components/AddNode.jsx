import React from 'react';

export class AddNode extends React.Component {
  render() {
    const { addNodeCallback } = this.props;

    return (
      <fieldset>
        <legend>Add Node</legend>

        <button
          class="btn btn-dark"
          onClick={addNodeCallback}
        >
          Add node
        </button>
      </fieldset>
    );
  }
}
