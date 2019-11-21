import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addScope } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Card,
  CardHeader,
  Button
} from "shards-react";

const defualtCopy =
  "The scope of this assignment consists of identifying the characteristics of the subject property that are relevant to the purpose and the intended use of this assignment. As previously addressed. For the subject, this is accomplished by reviewing public data records. The data source for comparable sales is typically the local multiple listing system but could include sales not recorded in the local MLS. The appraiser has not confirmed the sales directly with the selling broker. If the sales are noted as being closed in the local MLS the information is deemed to be accurate and reliable. The appraiser has not inspected the subject property or comparable transfers included in this report unless otherwise noted. In the absence of observing the subject property form the street. The appraiser has utilized online sources including tax data and possibly other noted sources, to make basic assumptions about the property. The subject property is assumed to be in average overall condition and generally conforms to the neighborhood in terms of style, condition, construction materials and in external and economic factors. There are no adverse environmental conditions (hazardous wastes, toxic substances, etc.) present in the improvements, on the site, or in the immediate vicinity of the subject property. There are no significant discrepancies between the public record information or other data sources and the existing site or improvements.";

class ScopeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scope: defualtCopy
    };
  }

  handleAdd = e => {
    e.preventDefault();
    if (this.state.scope.length > 0) {
      var newState = this.state.scope; // Clean the input up
      newState.replace(/[\n\r]+/g, ""); // remove carriage returns
      newState.replace(/\s{2,10}/g, " "); // remove extra spaces

      this.props.dispatch(addScope(newState));
      this.props.dispatch(incrementProgress());
    }
  };

  handleChange = e => {
    this.setState({
      scope: e.target.value
    });
  };

  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Add Scope of Work</h6>
        </CardHeader>
        <Row>
          <Col>
            <Form>
              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row form>
                    <Col md="12" className="form-group">
                      <div className="form-group">
                        {this.props.locked === true ? (
                          <textarea
                            disabled
                            value={this.props.scope}
                            className="form-control"
                            rows="5"
                            id="comment"
                          ></textarea>
                        ) : (
                          <textarea
                            onChange={this.handleChange}
                            className="form-control"
                            rows="5"
                            id="comment"
                          >
                            {defualtCopy}
                          </textarea>
                        )}
                      </div>
                    </Col>
                  </Row>

                  {/* BUTTONS */}
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
    scope: state.report.scope
  };
};

export default connect(mapStateToProps)(ScopeForm);
