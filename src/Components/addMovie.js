import React from "react";
import { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const rateRef = useRef();
  const durationRef = useRef();
  const imageRef = useRef();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movies Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>name</label>
            <input type="text" ref={nameRef}></input>
            <label>description</label>
            <input type="text" ref={descriptionRef}></input>
            <label>rate</label>
            <input type="text" ref={rateRef}></input>
            <label>duration</label>
            <input type="text" ref={durationRef}></input>
            <label>image URL</label>
            <input type="text" ref={imageRef}></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              add({
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                rate: rateRef.current.value,
                duration: durationRef.current.value,
                image: imageRef.current.value,
              })
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
