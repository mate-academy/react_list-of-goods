/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { orange } from '@mui/material/colors';
import { ListItemText } from '@mui/material';

const goodsFromServer: string[] = [
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

type State = {
  isVisible: boolean,
  visibleGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    visibleGoods: goodsFromServer,
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <Box sx={{ m: 2 }}>
          Goods available: {goodsFromServer.length}
        </Box>
        <br />
        {this.state.isVisible === false && (
          <Button
            type="button"
            onClick={() => {
              this.setState(
                (state) => {
                  const prev = state.isVisible;

                  return ({
                    isVisible: !prev,
                  });
                },
              );
            }}
          >
            Start
          </Button>
        )}

        {this.state.isVisible && (
          <Box sx={{ ms: 1, mb: 0 }}>
            <List>
              {this.state.visibleGoods.map((good: string) => (
                <ListItem sx={{ pt: 0 }} key={good}>
                  <ListItemText>{good}</ListItemText>
                </ListItem>
              ))}
            </List>
            <ButtonGroup sx={{ color: orange[500] }}>
              <Button
                onClick={() => (
                  this.setState(
                    (state) => {
                      const prev = [...state.visibleGoods].reverse();

                      return ({
                        visibleGoods: prev,
                      });
                    },
                  )
                )}
              >
                Reverse
              </Button>
              <Button
                onClick={() => (
                  this.setState(
                    (state) => {
                      const prev = [...state.visibleGoods];

                      prev.sort((good1, good2) => good1.localeCompare(good2));

                      return ({
                        visibleGoods: prev,
                      });
                    },
                  )
                )}
              >
                Sort alphabetically
              </Button>
              <Button
                onClick={() => (
                  this.setState(
                    () => {
                      return ({
                        visibleGoods: [...goodsFromServer],
                      });
                    },
                  )
                )}
              >
                Reset
              </Button>
              <Button
                onClick={() => (
                  this.setState(
                    (state) => {
                      const prev = [...state.visibleGoods];

                      prev.sort((good1: string, good2: string) => (
                        good1.length - good2.length
                      ));

                      return ({
                        visibleGoods: prev,
                      });
                    },
                  )
                )}
              >
                Sort by Length
              </Button>
            </ButtonGroup>

          </Box>
        )}
      </div>
    );
  }
}
export default App;
