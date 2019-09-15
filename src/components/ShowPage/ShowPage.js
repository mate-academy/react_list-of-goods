import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';
import ShowList from '../ShowList/ShowList';

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSelect: 0,
      workList: [...props.listOfGoods],
    };
    this.handleStateOfList = this.handleStateOfList.bind(this);
  }

  handleStateOfList(id, value) {
    if (id === 'reverse') {
      this.setState(prevState => ({ workList: prevState.workList.reverse() }));
    }

    if (id === 'sort-alphabetically') {
      this.setState(prevState => ({ workList: prevState.workList.sort() }));
    }

    if (id === 'reset') {
      this.setState(
        {
          initialSelect: 0,
          workList: [...this.props.listOfGoods],
        }
      );
    }

    if (id === 'sort-by-length') {
      this.setState(prevState => (
        { workList: prevState.workList.sort((a, b) => a.length - b.length) }
      ));
    }

    if (id === 'select') {
      this.setState({ initialSelect: value - 1 });
    }
  }

  render() {
    return (
      <>
        <Buttons
          handleStateOfList={this.handleStateOfList}
          defaultSelect={this.state.initialSelect + 1}
        />
        <ShowList
          listOfGoods={this.state.workList.slice(this.state.initialSelect)}
        />
      </>
    );
  }
}

ShowPage.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShowPage;
