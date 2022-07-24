import React,{useState} from 'react';
import './EmployeeRecords.css';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function EmployeeRecords() {
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [showEdit, setShowEdit] = useState(false);
const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);
  return (
    <div className="container">
        {/* <div className="table-header">
        
        <h1>Employee Records</h1>
        <h1> Setting</h1>
        
        </div> */}
        {/* <div className="row table-header">
  <div className="col-sm"><h1>Employee Records</h1></div>
  <div className="col-sm"><h2> Setting</h2></div>
  <div className="col-sm"><button>Add New+</button></div>
</div> */}
<div className="row justify-content-between table-header">
    <div className="col-4">
    <h1>Employee Records</h1>
    </div>
    <div className="col-4">

    <button type="button" className="btn btn-primary"  onClick={handleShow}>Add New+</button>
    </div>
  </div>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Email</th>
      <th scope="col">Total Hrs</th>

      <th scope="col">Daily Average Hrs</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Puja</td>
      <td>MTS</td>
      <td>thepuja@gmail.com</td>
        <td>120</td>
        <td>8</td>
        <td>
        <button type="button" className="btn btn-danger">
        <i className="fa fa-trash delete"></i>
            Delete</button>
        <button type="button" className="btn btn-info edit" onClick={handleShowEdit}>
        <i className="fa fa-edit edit"></i>Edit</button>
        </td>
    </tr>

    <tr>
      <td>Anirban</td>
      <td>Full stack</td>
      <td>anirban@gmail.com</td>
        <td>120</td>
        <td>8</td>
        <td>
        <button type="button" className="btn btn-danger">
        <i className="fa fa-trash delete"></i>
            Delete</button>
        <button type="button" className="btn btn-info edit" onClick={handleShowEdit}>
        <i className="fa fa-edit edit"></i>Edit</button>
        </td>
    </tr>
   
  </tbody>
</table>
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Add Employee</Modal.Title>
  </Modal.Header>
  <Modal.Body> 
  <form>
  <div className="row">
    <div className="col-md-6">
      <label>First Name</label>
      <input type="text" className="form-control"  placeholder="First Name"/>
    </div>
    <div className="col-md-6">
      <label>Last Name</label>
      <input type="text" className="form-control"  placeholder="Last Name"/>
    </div>
  </div>
    <div className="row">
    <div className="col-md-6">
      <label>Position</label>
      <input type="text" className="form-control"  placeholder="Position"/>
    </div>
    <div className="col-md-6">
      <label>Email</label>
      <input type="email" className="form-control"  placeholder="Email"/>
    </div>
    </div>
   <div className="modal-footer">
   <Button variant="danger" className="cancel" onClick={handleClose} type="submit">
        Cancel
      </Button>
   <Button variant="primary" className="save" onClick={handleClose} type="submit">
        Submit
      </Button>
    
   </div>
    
</form>
    </Modal.Body>
</Modal>

<Modal show={showEdit} onHide={handleCloseEdit}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Info</Modal.Title>
  </Modal.Header>
  <Modal.Body> 
  <form>
  <div className="row">
    <div className="col-md-6">
      <label>First Name</label>
      <input type="text" className="form-control"  placeholder="First Name"/>
    </div>
    <div className="col-md-6">
      <label>Last Name</label>
      <input type="text" className="form-control"  placeholder="Last Name"/>
    </div>
  </div>
    <div className="row">
    <div className="col-md-6">
      <label>Position</label>
      <input type="text" className="form-control"  placeholder="Position"/>
    </div>
    <div className="col-md-6">
      <label>Email</label>
      <input type="email" className="form-control"  placeholder="Email"/>
    </div>
    </div>
   <div className="modal-footer">
   <Button variant="danger" className="cancel" onClick={handleCloseEdit} type="submit">
        Cancel
      </Button>
   <Button variant="primary" className="save" onClick={handleCloseEdit} type="submit">
        Submit
      </Button>
    
   </div>
    
</form>
    </Modal.Body>
</Modal>
    </div>
  );
}

export default EmployeeRecords;