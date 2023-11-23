import React from 'react'
// import "./index.css"
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

export default (props) => {
  return (
    <>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          Modal body text goes here.
        </ModalBody>
      </Modal>
    </>
  )
};