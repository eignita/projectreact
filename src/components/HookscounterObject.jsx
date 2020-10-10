import React, { useState } from "react";
import { Form, Badge } from "react-bootstrap";

function HookscounterObject() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <Form className="HookscounterObject">
      <h3>useState - object</h3>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="firstname"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="lastname"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
      </Form.Group>
      <h3>
        Your firstname is <Badge variant="primary">{name.firstname}</Badge>
      </h3>{" "}
      <h3>
        Your lastname is <Badge variant="info">{name.lastname}</Badge>
      </h3>{" "}
      <h3>
        <Badge variant="warning">{JSON.stringify(name)}</Badge>
      </h3>
      <Form.Label></Form.Label>{" "}
    </Form>
  );
}

export default HookscounterObject;
