import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserMainDisplayCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{marginTop:"30px"}}>
      <CardMedia
        sx={{ height: 280 }}
        image="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          Batman
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Male<br/>
          Missing Since: 12-2-23
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}