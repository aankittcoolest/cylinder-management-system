import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EditUser = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal open="true" onClose={props.handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2>Edit User</h2>
          <form>
            <div className="form-group">
              <label>Category</label>
              <select class="form-control">
                <option>Load man</option>
                <option>Delivery Man</option>
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <div class="form-row">
                <div class="col">
                  <label>Year</label>
                  <select class="form-control">
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
                <div class="col">
                  <label>Month</label>
                  <select class="form-control">
                    <option>Dec</option>
                  </select>
                </div>
                <div class="col">
                  <label>Day</label>
                  <select class="form-control">
                    <option>05</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-success" onClick={props.handleSave}>
              Save
            </button>
            <button className="btn btn-danger ml-3" onClick={props.handleClose}>
              Cancel
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditUser;
