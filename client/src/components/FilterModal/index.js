import React, { useState }from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Filter from '../Filter'
import getUserProfile from '../../utils/getUserProfile'

function FilterModal() {
            const [show, setShow] = useState(false);
            const { filterUpdate, setFilterUpdate } = getUserProfile();
          
            const handleClose = () => {
              setFilterUpdate(!filterUpdate)
              setShow(false)};
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="secondary" onClick={handleShow} style={{position: 'relative',left: '55%',fontSize: 'x-large'}}>
                  Filter <i className="fas fa-filter"></i>
                </Button>
          
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Filter Your BFFL:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Filter />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="info">Save</Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          
        export default FilterModal;