import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addConditions } from "../../redux/actions/reportActions";
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

const defaultCopy =
  "1. The appraiser will not be responsible for matters of a legal nature that affect either the property being appraised/observed or the title to it. The appraiser assumes that the title is good and marketable and, therefore, will not render any opinions about the title. The property is being analyzed based on it beingunder responsible ownership. 2. The appraiser will not give testimony or appear in court because he made an appraisal of the property in question, unless specific arrangements to do so have been made beforehand, or as otherwise required by law. 3. The appraiser has no knowledge of any hidden or unapparent conditions of the property or adverse environmental conditions (including the presence of hazardous waste, toxic substances, etc.) that would make the property more or less valuable, and has assumed that there are no such conditions and makes no guarantees or warranties, express or implied, regarding the condition of the property. The appraiser will not be responsible for any such conditions that do exist or for any engineering or testing that might be required to discover whether such conditions exist. This consulting report must not be considered an environmental assessment of the subject property. 4. The appraiser obtained the information, estimates, and opinions that were expressed in the consulting report from sources that he or she considers to be reliable and believes them to be true and correct. The appraiser does not assume responsibility for the accuracy of such items that were furnished by other parties. 5. The appraiser will not disclose the contents of the consulting report except as provided for in the Uniform Standards of Professional Appraisal Practice, and any applicable federal, state or local laws 6. The appraiser is not an employee of the company or individual(s) ordering this report and compensation is not contingent upon the reporting of a predetermined value or direction of value or upon an action or event resulting from the analysis, opinions, conclusions, or the use of this report. CERTIFICATION: The appraiser certifies and agrees that: 1. The statements of fact contained in this report are true and correct. 2. The reported analyses, opinions, and conclusions are limited only by the reported assumptions and limiting conditions and are my personal, impartial, and unbiased professional analyses, opinions, and conclusions. 3. Unless otherwise indicated, I have no present or prospective interest in the property that is the subject of this report and no personal interest with respect to the parties involved. 4. I have no bias with respect to the property that is the subject of this report or the parties involved with this assignment. 5. My engagement in this assignment was not contingent upon developing or reporting predetermined results. 6. My compensation for completing this assignment is not contingent upon the development or reporting of predetermined results. 7. My analyses, opinions, and conclusions were developed, and this report has been prepared, in conformity with the Uniform Standards of Professional Appraisal Practice that were in effect at the time this report was prepared. 8. Unless otherwise indicated, I have NOT made a personal inspection of the interior and exterior areas of the property that is the subject of this report, and the exteriors of all properties listed as comparable transfers. 9. Unless otherwise indicated, no one provided significant real property appraisal assistance to the person(s) signing this certification (if there are exceptions, the name of everyone providing significant real property appraisal assistance is stated elsewhere in this report).";

class LimitingConditionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions: defaultCopy
    };
  }

  handleAdd = e => {
    e.preventDefault();
    if (this.state.conditions.length > 0) {
      var newState = this.state.conditions; // Clean the input up
      this.props.dispatch(addConditions(newState));
      this.props.dispatch(incrementProgress());
    }
  };

  handleChange = e => {
    this.setState({
      conditions: e.target.value
    });
  };

  render() {
    return (
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Add Limiting Conditions</h6>
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
                            value={this.props.conditions}
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
                          >{defaultCopy}</textarea>
                        )}
                        {/* <FormFeedback valid>Valid Limiting Conditions have been added.</FormFeedback> */}
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
    conditions: state.report.conditions
  };
};

export default connect(mapStateToProps)(LimitingConditionsForm);
