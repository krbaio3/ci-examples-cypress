import * as React from 'react';
import * as classes from './hotel-card.styles';

import Avatar from '@material-ui/core/Avatar/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import { HotelEntityVm } from '../hotel-collection.vm';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';

interface Props {
  hotel: HotelEntityVm;
}

export const HotelCard: React.FunctionComponent<Props> = (props) => {
  const { hotel } = props;
  const history = useHistory();

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Hotel">{hotel.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="Edit hotel"
          onClick={() => history.push(linkRoutes.hotelEdit(hotel.id))}
        >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
