import React from 'react'
import "./index.css"
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

function Slider() {
  return (
    <>

      <Modal>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          Modal body text goes here.
        </ModalBody>
      </Modal>

    </>
  )
}

export default Slider