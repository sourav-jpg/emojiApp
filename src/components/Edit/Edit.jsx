import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import "./Edit.css";

const Edit = (props) => {
  const handleClose = () => {
    props.setOpen(!props.data);
  };
  return (
    <div>
      <Dialog open={props.data} onClose={() => props.setOpen(!props.data)}>
        <DialogTitle sx={{ border:"0.5px solid rgb(195, 192, 192)" }}>
          Basic Modal
        </DialogTitle>
        <DialogContent>
          <DialogContentText tentText sx={{ width: "350px", height: "350px" }}>
            <div className="dialogcontent">
              <div>
                <label>
                  <span>*</span>name :
                </label>
                <input type="text"></input>
              </div>
              <div>
                <label>
                  <span>*</span>email :
                </label>
                <input type="text"></input>
              </div>
              <div>
                <label>
                  <span>*</span>phone :
                </label>
                <input type="text"></input>
              </div>
              <div>
                <label>
                  <span>*</span>website :
                </label>
                <input type="text"></input>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ border:"0.5px solid rgb(195, 192, 192)" }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ pl: 4, pr: 4 }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Edit;
