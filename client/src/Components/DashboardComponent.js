import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Link } from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
function DashboardComponent(props) {
    
    return (
        
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.imgurl}
                    alt="img"
                    height= "250"
                />
                
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.head}
                        </Typography>

                    </CardContent>
            </CardActionArea>
            <CardActions>
            <a href={props.buttonurl} style={{textDecoration: "none"}}>
                <Button size="small" color="primary" variant="contained" >
                    {props.buttontitle}
                </Button>
                </a>
            </CardActions>
        </Card>
        
    );
}

export default DashboardComponent