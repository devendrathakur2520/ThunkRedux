import React from 'react';
import Modal from 'react-bootstrap/Modal' 
import { useState } from 'react';
import {Button} from 'react-bootstrap';
export  const  Login=()=> {
    const [show, setShow] = useState(false);
    const [Details,setDetails]=useState([])
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
          <Modal.Body>UserName:<input type="text" placeholder="UserName"/></Modal.Body>
          <Modal.Body>PassWord:<input type="password" placeholder="password"/></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              logIn
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
