import React, { useState } from "react";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import Button from "@material-ui/core/Button";

const ListUser = (props) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);

  const handleEditUser = () => {
    setOpenEditForm(true);
  };

  const handleEditClose = () => {
    setOpenEditForm(false);
  };

  const handleEditSave = () => {
    setOpenEditForm(false);
  };

  const handleAddUser = () => {
    setOpenAddForm(true);
  };

  const handleAddClose = () => {
    setOpenAddForm(false);
  };

  const handleAddSave = () => {
    setOpenAddForm(false);
  };

  let editUserComponent;
  if (openEditForm) {
    editUserComponent = (
      <EditUser handleClose={handleEditClose} handleSave={handleEditSave} />
    );
  }

  let addUserComponent;
  if (openAddForm) {
    addUserComponent = (
      <AddUser handleClose={handleAddClose} handleSave={handleAddSave} />
    );
  }

  return (
    <div>
      {editUserComponent}
      {addUserComponent}
      <div className="d-flex justify-content-between">
        <h1>List of users</h1>
        <button
          type="button"
          className="btn btn-primary mb-5"
          onClick={handleAddUser}
        >
          Add new User
        </button>
      </div>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Ankit Agrawal&nbsp;&nbsp;
              <span className="badge badge-success">Load-manager</span>
            </h5>
            <div>
              <div className="card-text">
                <span className="font-weight-bold">Address: </span> hello
                Address
              </div>
              <div className="card-text">
                <span className="font-weight-bold">Phone Number: </span>{" "}
                123456789
              </div>
              <div className="card-text">
                <span className="font-weight-bold">DOB: </span>
                2020-Dec-01
              </div>
              <div className="mt-3 d-flex justify-content-start">
                <div>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={handleEditUser}
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-danger ml-3">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
