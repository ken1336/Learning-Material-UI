import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddItemDialog(props){
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(
      {
        name: "",
        message: "",
      }
    );
    const handleInputChange = e => {
      console.log(e.target.value)
      setData({
        name: e.target.id === "name" ?  e.target.value  : data.name,
        message:e.target.id === "message" ?  e.target.value  : data.message,
      });
      
    }
    const handleInsertData = () =>{
     
      props.addCard(data)
      
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleAdd = () =>{

      handleInsertData();
      handleClose();
    }
    const handleClose = () => {
      setOpen(false);
    };
    
    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open form dialog
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent style = {{width:"500px"}}>
              <DialogContentText >
                Task name
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                
                
                fullWidth
                onChange = {handleInputChange}
              />
              <DialogContentText>
                <br></br>
                Message
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="message"
                fullWidth
                onChange = {handleInputChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleAdd} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}