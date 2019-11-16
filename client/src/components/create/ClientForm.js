import React from "react";
import { connect } from "react-redux";
import { addClient } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import NavButtons from "./NavButtons";

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Card,
  CardHeader,
  Button
} from "shards-react";

class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleAdd = e => {
    let isValid = false;
    if (this.state.name.length > 0) {
      isValid = true;
      this.props.dispatch(addClient(this.state.name));
      this.props.dispatch(incrementProgress());
    }

    this.setState({
      valid: isValid
    });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Add Client Name</h6>
        </CardHeader>
        <Row>
          <Col>
            <Form>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row form>
                    <Col md="12" className="form-group">
                      <label htmlFor="feClientName">Client</label>
                      {this.props.locked === true ? (
                        <FormInput
                          required
                          disabled
                          valid
                          id="feClientName"
                          value={this.props.name}
                          onChange={this.handleChange}
                        />
                      ) : (
                        <FormInput
                          required
                          id="feClientName"
                          onChange={this.handleChange}
                        />
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {this.props.locked === true ? (
                        <Button
                          size="sm"
                          disabled
                          theme="success"
                          onClick={this.handleAdd}
                        >
                          Add
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          theme="success"
                          onClick={this.handleAdd}
                        >
                          Add
                        </Button>
                      )}
                    </Col>
                    <Col>
                      <NavButtons />
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.report.client
  };
};

export default connect(mapStateToProps)(ClientForm);
