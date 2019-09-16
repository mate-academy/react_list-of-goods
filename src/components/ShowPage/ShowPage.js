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
    switch (id) {
      case 'reverse':
        this.setState(prevState => (
          {
            workList: prevState.workList.reverse(),
          }
        ));
        break;
      case 'sort-alphabetically':
        this.setState(prevState => ({ workList: prevState.workList.sort() }));
        break;
      case 'reset':
        this.setState(
          {
            initialSelect: 0,
            workList: [...this.props.listOfGoods],
          }
        );
        break;
      case 'sort-by-length':
        this.setState(prevState => (
          { workList: prevState.workList.sort((a, b) => a.length - b.length) }
        ));
        break;
      case 'select':
        this.setState({ initialSelect: value - 1 });
        break;
      default:
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
