import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`

export class AddEdge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  render() {
    const { nodes, addEdgeCallback } = this.props;
    const { from, to } = this.state;

    return (
      <fieldset>
        <legend>Add Edge</legend>

        <div class="form-group">
          <label for="from">
            From:
          </label>
          <select
            id="from"
            class="form-control"
            onChange={event => this.setState({ from: event.target.value })}
          >
            <option value={null}>Valitse...</option>
            {nodes.map(node => <option value={node.id}>{node.label}</option>)}
          </select>
        </div>

        <div class="form-group">
          <label for="to">
            To:
          </label>
          <select
            id="to"
            class="form-control"
            onChange={event => this.setState({ to: event.target.value })}
          >
            <option value={null}>Valitse...</option>
            {nodes.map(node => <option value={node.id}>{node.label}</option>)}
          </select>
        </div>

        <button
          class="btn btn-dark"
          disabled={!from && !to}
          onClick={() => addEdgeCallback(from, to)}
        >
          Add edge
        </button>
      </fieldset>
    );
  }
}

