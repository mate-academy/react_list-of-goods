import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { List } from './components/List/List';

export class App extends React.Component {
  state = {
    isVisible: true,
  }

  handleShow = () => (
    this.setState({
      isVisible: false,
    })
  )

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {isVisible ? (
          <Container
            className="d-flex justify-content-center"
          >
            <Button
              onClick={this.handleShow}
              className="w-25 mt-3"
            >
              Show
            </Button>
          </Container>
        ) : (
          <List />
        )}
      </div>
    );
  }
}
