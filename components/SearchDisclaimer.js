import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function SearchDisclaimer(){
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{
            width:'47vw'
        }}>
        <Button  variant="filled"
              sx={{
                width: "100%",
                background: "#ddd",
                color: "rgb(132, 132, 132)",
                fontWeight: "900",
                "&:hover": {
                    background: "#fff",
                },
            }} 
            onClick={handleClickOpen}>
          Search
                  </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Website Usage Disclaimer."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              - This website was developed as a personal project and is not being used to track or spy on its users.
              <br/>
              <br/>
              - This website does not collect cookies and it does not store any users location.
              <br/>
              <br/>
              - The search option is less accurate than the location.
              <br />
              <br />
              Please give me feedback.
              <br/>
              <br/>
              Thanks
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Okay</Button>
          </DialogActions>
        </Dialog>
      </div>
    );

}