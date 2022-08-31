import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

type Props = {
  visibleGoods: string[],
};

export const Goods: React.FC<Props> = (props) => {
  const { visibleGoods } = props;

  if (!visibleGoods.length) {
    return null;
  }

  return (
    <Paper
      elevation={8}
      sx={
        {
          width: '100%',
          maxWidth: 360,
        }
      }
    >
      <List
        className="Goods"
        disablePadding
      >
        {visibleGoods.map((good, index, goods) => (
          <>
            <ListItem
              className="Goods__item"
              key={`${good}`}
            >
              <ListItemText primary={good} />
            </ListItem>
            {index !== goods.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
};
