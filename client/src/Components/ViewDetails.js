import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function ViewDetails() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                View
            </Button>
            <Dialog style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "20px"}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
              
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box style={{minWidth: "400px"}}>
                            <center><img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                style={{ borderRadius: "50%", height: "150px", width: "150px", marginTop: "30px" }} /></center>
                            <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                Charlie Puth
                            </Typography>
                            <center>Male</center>
                            <Typography variant="body2" color="text.secondary" textAlign="center" style={{ marginTop: "20px", paddingBottom: "30px" }}>
                                Missing Date
                            </Typography>

                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{padding:"20px"}}>
                    <Button variant='contained' onClick={handleClose}>Close</Button>
                    <Button variant='contained' onClick={handleClose} autoFocus>
                        View
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}