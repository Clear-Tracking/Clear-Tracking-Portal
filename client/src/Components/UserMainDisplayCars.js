import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';

export default function UserMainDisplayCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{marginTop:"30px",marginBottom:"30px",marginRight:"10px",color:"#FF9BBB"}}>
      <CardMedia
        sx={{ height: 280 }}
        image="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"} color="black"  fontWeight="bold" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">
          Charlie Puth
        </Typography>
        <Typography variant="body2" color="#555555" textAlign={"center"} fontWeight="600" padding="8px" fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem" textTransform={"uppercase"}>
          Male
          </Typography>
          <Typography variant="body2" color="#8F8F8F" textAlign="center" fontWeight="400" padding="8px"  fontFamily={"Poppins"} fontStyle={"normal"}lineHeight="143%"letterSpacing="-0.03rem">
          Missing Since: 12-2-23
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{borderRadius:"15px",marginBottom:"10px",background:"#81D0DF",marginLeft:'50px',padding:"8px", color:"#ffffff"}}>
          <ShareIcon></ShareIcon>
        </Button>
        <Button size="small" style={{borderRadius:"15px",marginBottom:"10px",background:"#81D0DF",marginRight:'50px',padding:"8px", color:"#ffffff"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}