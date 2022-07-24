import React,{useState} from 'react';
import './EmployeeRecords.css';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Select from 'react-select';

const onSubmit = (data:any) => {
  console.log(data);


}
const roles = [
  { value: 'DEVELOPER', label: 'DEVELOPER' },
  { value: 'QA', label: 'QA' },
  { value: 'DEVOPS', label: 'DEVOPS' },
  { value: 'ADMIN', label: 'ADMIN' }
]
function EmployeeRecords() {
  // for showing modals
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [showEdit, setShowEdit] = useState(false);
const handleCloseEdit = () => setShowEdit(false);
const handleShowEdit = () => setShowEdit(true);
//for react form validation
const { register, handleSubmit, formState: { errors } } = useForm();
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
      <th scope="col">Emp ID</th>
      <th scope="col">Position</th>
      <th scope="col">Email</th>
      <th scope="col">DOJ</th>
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
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className="row">
    <div className="col-md-4">
      <label>First Name *</label>
      <input type="text" className="form-control"  placeholder="First Name" {...register("fname",{required: true})} />
      {errors.fname && <span className="error">First Name is required</span>}
    </div>
    <div className="col-md-4">
      <label>Last Name *</label>
      <input type="text" className="form-control"  placeholder="Last Name" {...register("lname",{required: true})}/>
      {errors.lname && <span className="error">Last Name is required</span>}
    </div>
    <div className="col-md-4">
      <label>Employee ID *</label>
      <input type="text" className="form-control"  placeholder="Employee ID" {...register("empid",{required: true})}/>
      {errors.empid && <span className="error">Employee ID is required</span>}
    </div>
  </div>
    <div className="row">
    <div className="col-md-4">
      <label>Position *</label>
      {/* <input type="text" className="form-control"  placeholder="Position" {...register("position",{required: true})} /> */}
      <Select options={roles} />
      {errors.position && <span className="error">Last Name is required</span>}
    </div>
    <div className="col-md-4">
      <label>Email *</label>
      <input type="email" className="form-control"  placeholder="Email"
       {...register("email", { required: true , pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }})}
      />
       {errors.email && <span className="error">Email is required</span>}
    </div>
    <div className="col-md-4">
      <label>DOJ *</label>
      <input type="text" className="form-control"  placeholder="Date Of Joining" {...register("doj",{required: true})} />
      {errors.doj && <span className="error">DOJ is required</span>}
    </div>
    </div>
   <div className="modal-footer">
   <Button variant="danger" className="cancel" onClick={handleClose} type="submit">
        Cancel
      </Button>
   <Button variant="primary" className="save" type="submit">
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