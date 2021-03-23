import React, { useState, useEffect } from "react";
import AuthService from "../services/authService";
import UserService from "../services/userService";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const currentUser = (props) => {
  const currentUser = AuthService.getCurrentUser();
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);

  const redirect = () => {
    props.history.push("/profile");
            window.location.reload()
  }

  const handleClose = () => {
    setShow(false)};
  const handleShow = () => setShow(true);

  useEffect(() => {
    UserService.getUserContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
      <h3>
            <strong>{currentUser.username}'s</strong> Account
          </h3>
        <h3>{content}</h3>
      </header>
      <div className="card">
      <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>

        <div className="row">
        <Button variant="info" style={{width:'50%'}} onClick={redirect}>Go to Profile
        </Button>
        <Button variant="secondary" onClick={handleShow} style={{width:'50%'}}>
                  Change Password <i className="fas fa-lock"></i>
                </Button>
          
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Change your Password:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input >
                    </input>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="info">Save</Button>
                  </Modal.Footer>
                </Modal>
        </div>
      </div>
    </div>
  );
};

export default currentUser;