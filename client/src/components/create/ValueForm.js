import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addValue } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Card,
  CardHeader,
  FormInput,
  // FormGroup,
  // FormCheckbox,
  // FormSelect,
  FormFeedback,
  Button
} from "shards-react";

class ValueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minVal: "",
      rec: ""
    };
  }

  handleAdd = e => {
    e.preventDefault();
    if (this.state.minVal != "" && this.state.rec != "") {
      var newState = this.state.rec; // Clean the input up
      newState.replace(/[\n\r]+/g, ""); // remove carriage returns
      newState.replace(/\s{2,10}/g, " "); // remove extra spaces

      this.props.dispatch(
        addValue({
          minVal: this.state.minVal,
          rec: newState
        })
      );
      this.props.dispatch(incrementProgress());
    }
  };

  handleChangeMin = e => {
    this.setState({
      minVal: e.target.value
    });
  };

  handleChangeRec = e => {
    this.setState({
      rec: e.target.value
    });
  };

  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Add Value Range & Reconciliation</h6>
        </CardHeader>
        <Row>
          <Col>
            <Form>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row form>
                    <Col md="6" className="form-group">
                      <div className="form-group">
                        <label htmlFor="crt">Point Value</label>
                        {this.props.locked ? (
                          <FormInput
                            disabled
                            valid
                            value={this.props.minVal}
                            type="number"
                            className="form-control"
                            id="crt"
                          ></FormInput>
                        ) : (
                          <FormInput
                            type="number"
                            onChange={this.handleChangeMin}
                            className="form-control"
                            id="crt"
                          ></FormInput>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="12" className="form-group">
                      <div className="form-group">
                        <label htmlFor="comment">Reconciliation</label>
                        {this.props.locked ? (
                          <textarea
                            disabled
                            value={this.props.rec}
                            className="form-control"
                            rows="5"
                            id="comment"
                          ></textarea>
                        ) : (
                          <textarea
                            onChange={this.handleChangeRec}
                            className="form-control"
                            rows="5"
                            id="comment"
                          ></textarea>
                        )}
                      </div>
                    </Col>
                  </Row>

                  {/* BUTTONS */}
                  <Row>
                    <Col>
                      <Button theme="success" onClick={this.handleAdd}>
                        Add
                      </Button>
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
    minVal: state.report.minVal,
    maxVal: state.report.maxVal,
    rec: state.report.rec
  };
};

export default connect(mapStateToProps)(ValueForm);
