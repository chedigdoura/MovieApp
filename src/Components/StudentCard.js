import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./StudentCardStyle.css";
import Formulaire from "./Formulaire";

function StudentCard({ StudentListNow }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GSP - {StudentListNow.ATT_Nomprenom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formulaire StudentListNow={StudentListNow} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <Card style={{ width: "15rem", margin: "5px", heigh: "100%" }}>
          <Card.Img variant="top" src={StudentListNow.ATT_image} />
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>
              {StudentListNow.ATT_Nomprenom}
            </Card.Title>
            <Card.Text>{StudentListNow.ATT_LibClasse}</Card.Text>

            <hr />
            <div
              className={
                StudentListNow.Att_Stage_cycle_1 === 1
                  ? "ButtonStatus01"
                  : "ButtonStatus02"
              }
            >
              Stage 1er cycle <button onClick={handleShow} >MAJ</button>
            </div>
            <hr />
            <div
              className={
                StudentListNow.Att_Stage_cycle_2 === 1
                  ? "ButtonStatus01"
                  : "ButtonStatus02"
              }
            >
              Stage 2ème cycle <button onClick={handleShow} >MAJ</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default StudentCard;
