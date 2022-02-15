import React from 'react';
import './results.scss';

class Results extends React.Component {
  render() {
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
  };
};

export default Results;
