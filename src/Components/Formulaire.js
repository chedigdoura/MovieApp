import React from "react";
import Form from "react-bootstrap/Form";
import "./Formulaire.css";

function Formulaire({ StudentListNow }) {
  return (
    <>
      <h5>Organisme de stage</h5>
      <Form.Group className="mb-3">
        <Form.Label>Organisme de stage</Form.Label>
        <Form.Control placeholder="Organisme de stage" type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Architecte Responsable</Form.Label>
        <Form.Control
          placeholder="Nom et prénom de l'architecte responsable"
          type="text"
        />
      </Form.Group>
      <hr />
      <h5>Période du stage</h5>
      <Form.Group className="mb-4">
        <Form.Label>Date de début du stage </Form.Label>
        <input type="date" value="dateDebutStage"></input>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Date de fin du stage</Form.Label>
        <input type="date" value="dateFinStage"></input>
      </Form.Group>
      <hr />
      <h5>Documents et correspondance</h5>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Organisme de stage validé" />
        <Form.Check type="checkbox" label="Attestation de stage déposée" />
        <Form.Check type="checkbox" label="Rapport de stage déposé" />
        <Form.Check type="checkbox" label="Rapport de stage Validé" />
      </Form.Group>
    </>
  );
}

export default Formulaire;
