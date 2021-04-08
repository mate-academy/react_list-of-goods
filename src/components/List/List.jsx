import React from 'react';
import { Button, ButtonGroup, Form, Col, Container,
  ListGroup, ListGroupItem } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

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

export class List extends React.Component {
  state = {
    goods: [...goodsFromServer],
    reverse: false,
    selectNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selected: 1,
  }

  handleSelect = (event) => {
    const { value } = event.target;

    this.setState({
      selected: value,
      goods: goodsFromServer.filter(good => (
        good.length >= value
      )),
    });
  }

  handleReverse = () => {
    this.setState(prev => ({
      goods: [...prev.goods].reverse(),
    }));
  }

  handleSortLetters = () => {
    const { reverse } = this.state;

    this.setState(prev => ({
      goods: [...prev.goods].sort(
        (firstGood, secondGood) => (reverse ? (
          firstGood.localeCompare(secondGood)
        ) : (
          secondGood.localeCompare(firstGood)
        )),
      ),
      reverse: !reverse,
    }));
  }

  handleReset = () => {
    this.setState({
      goods: [...goodsFromServer],
      reverse: false,
      selected: 1,
    });
  }

  handleSortLength = () => {
    const { reverse } = this.state;

    this.setState(prev => ({
      goods: [...prev.goods].sort(
        (firstGood, secondGood) => (reverse ? (
          firstGood.length - secondGood.length
        ) : (
          secondGood.length - firstGood.length
        )),
      ),
      reverse: !reverse,
    }));
  }

  render() {
    const { goods, selectNumbers, selected } = this.state;
    const containerClasses = [
      'd-flex', 'flex-center', 'flex-column', 'w-50',
    ];

    return (
      <Container
        className={containerClasses}
      >
        <ListGroup>
          {goods.map(good => (
            <ListGroupItem key={uuidv4()}>
              {good}
            </ListGroupItem>
          ))}
        </ListGroup>
        <ButtonGroup className="pt-2">
          <Button
            variant="danger"
            onClick={this.handleReverse}
          >
            Reverse
          </Button>
          <Button
            variant="secondary"
            onClick={this.handleSortLetters}
          >
            Sort letter
          </Button>
          <Button
            variant="warning"
            onClick={this.handleReset}
          >
            Reset
          </Button>
          <Button
            variant="success"
            onClick={this.handleSortLength}
          >
            Sort length
          </Button>
        </ButtonGroup>
        <Form>
          <Form.Row>
            <Col sm={3} className="my-1">
              <Form.Label>Select filter option</Form.Label>
              <Form.Control
                as="select"
                value={selected}
                onChange={this.handleSelect}
              >
                {selectNumbers.map((number, index) => (
                  <option key={uuidv4()} value={index + 1}>
                    {number}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}
