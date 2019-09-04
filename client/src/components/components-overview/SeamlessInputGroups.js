import React from "react";
import {
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button
} from "shards-react";

const SeamlessInputGroups = () => (
  <div>

    <ListGroup flush>
      <ListGroupItem className="px-3">
        <InputGroup seamless className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>
              <i className="material-icons">person</i>
            </InputGroupText>
          </InputGroupAddon>
          <FormInput value="design.revision" onChange={() => { }} />
        </InputGroup>

        <InputGroup seamless className="mb-3">
          <FormInput
            type="password"
            value="mySuperSecretPassword"
            onChange={() => { }}
          />
          <InputGroupAddon type="append">
            <InputGroupText>
              <i className="material-icons">lock</i>
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup seamless className="mb-3">
          <FormInput placeholder="Recipient's username" />
          <InputGroupAddon type="append">
            <Button theme="white">Button</Button>
          </InputGroupAddon>
        </InputGroup>
      </ListGroupItem>
    </ListGroup>


  </div>
);

export default SeamlessInputGroups;
