import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
//import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'

import { useHistory } from "react-router-dom";


export const Login = () => {
  const [show, setShow] = useState(false);
  const [Details, setDetails] = useState(
    {
      name: "",
      password: ""
    }
  )
  const history=useHistory();
  const { name, password } = Details;
  const handleChange = (e) => {
    setDetails({ ...Details, [e.target.name]: e.target.value });

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        LogIn
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>UserName:<input type="text" placeholder="UserName" name="name" value={name} onChange={handleChange} /></Modal.Body>
        <Modal.Body>PassWord:<input type="password" placeholder="password" name="password" value={password} onChange={handleChange} /></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            logIn
          </Button>


          <Button variant="primary" onSubmit={onSubmit}>
            login go
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

