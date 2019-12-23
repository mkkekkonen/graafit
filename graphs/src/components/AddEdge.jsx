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
      <div>
        <Container>
          <label for="from">
            From:
            <select
              id="from"
              onChange={value => this.setState({ from: value })}
            >
              {nodes.map(node => <option value={node.id}>{node.label}</option>)}
            </select>
          </label>

          <label for="to">
            To:
            <select
              id="to"
              onChange={value => this.setState({ to: value })}
            >
              {nodes.map(node => <option value={node.id}>{node.label}</option>)}
            </select>
          </label>
        </Container>

        <button
          disabled={!from && !to}
          onClick={() => addEdgeCallback(from, to)}
        >
          Add edge
        </button>
      </div>
    );
  }
}

