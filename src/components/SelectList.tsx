import React from 'react';

class SelectedList extends React.Component {
  state = {
    select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  render() {
    const { select } = this.state;

    return (
      <>
        {select.map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </>
    );
  }
}

export default SelectedList;
