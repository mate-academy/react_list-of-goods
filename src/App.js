import React, { PureComponent } from 'react';
import { ButtonGroup,
  Button,
  ListGroup,
  Container,
  Col,
  Row } from 'react-bootstrap';
import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const preparedGoodsFromServer = goodsFromServer.map((good, index) => (
  {
    name: good,
    id: index,
  }
));

class App extends PureComponent {
  state = {
    hidden: true,
    goods: preparedGoodsFromServer,
  }

  showList = () => {
    this.setState({
      hidden: false,
    });
  }

  handleRevers = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  handleReset = () => {
    this.setState({
      goods: preparedGoodsFromServer,
    });
  }

  sortByAbc = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.localeCompare(b.name)
      )),
    }));
  }

  sortByNameLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.name.length - b.name.length
      )),
    }));
  }

  render() {
    const { hidden, goods } = this.state;

    return (
      <div className="App">
        <Container>
          <Button hidden={!hidden} onClick={this.showList}>
            Show goods
          </Button>
          <Row hidden={hidden} className="justify-content-md-center">
            <Col>
              <ButtonGroup vertical aria-label="Basic example">
                <Button variant="dark" onClick={this.handleRevers}>
                  Reverse
                </Button>
                <Button variant="danger" onClick={this.handleReset}>
                  Reset
                </Button>
                <Button variant="warning" onClick={this.sortByAbc}>
                  Sort alphabetically
                </Button>
                <Button variant="success" onClick={this.sortByNameLength}>
                  Sort by name length
                </Button>
              </ButtonGroup>
            </Col>
            <Col md="6">
              <ListGroup className="ListGroup">
                {goods.map(({ name, id }) => (
                  <ListGroup.Item key={id}>
                    {name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
