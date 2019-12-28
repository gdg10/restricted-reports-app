import React from "react";

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormFeedback
} from "shards-react";

class PropertyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streetNumber: null,
      preDirection: null,
      streetSuffix: null,
      postDirection: null,
      streetName: null,
      streetNameValid: null,
      curCity: null,
      cityValid: null,
      curState: null,
      curZip: null,
      zipValid: null,
      curMLS: null,
      isValidInput: false
    };
  }

  getPropertyInput = () => {
    this.propertyInputValidator();
    return {
      isValid : this.state.isValidInput,
      propertyInput : {
        streetNumber: this.state.streetNumber,
        preDirection: this.state.preDirection,
        streetSuffix: this.state.streetSuffix,
        postDirection: this.state.postDirection,
        streetName: this.state.streetName,
        curCity: this.state.curCity,
        cityValid: this.state.cityValid,
        curState: this.state.curState,
        curZip: this.state.curZip,
        curMLS: this.state.curMLS
      }
    }
  }

  propertyInputValidator = () => {
    let val =
      this.streetNameValidator(this.state.curState) &&
      this.zipValidator(this.state.curZip) &&
      this.cityValidator(this.state.curCity);
    this.setState({
      isValidInput: val
    });
  };

  lengthValidator = foo => {
    return foo === null || foo.length > 0 ? true : false;
  };

  streetNameValidator = foo => {
    let val = this.lengthValidator(foo);
    this.setState({
      streetNameValid: val
    });
  };

  zipValidator = foo => {
    let val = foo === null || foo.length === 5 ? true : false;
    this.setState({
      zipValid: val
    });
  };

  cityValidator = foo => {
    let val = this.lengthValidator(foo);
    this.setState({
      cityValid: val
    });
  };

  handleStreetNumber = e => {
    this.setState({
      streetNumber: e.target.value
    });
  };

  handlePreDirection = e => {
    this.setState({
      preDirection: e.target.value
    });
  };

  handleStreetName = e => {
    this.setState({
      streetName: e.target.value
    });
  };

  handleStreetSuffix = e => {
    this.setState({
      streetSuffix: e.target.value
    });
  };

  handlePostDirection = e => {
    this.setState({
      streetPostDirection: e.target.value
    });
  };

  handleCurCity = e => {
    this.setState({
      curCity: e.target.value
    });
  };

  handleCurState = e => {
    this.setState({
      curState: e.target.value
    });
  };

  handleCurZip = e => {
    this.setState({
      curZip: e.target.value
    });
  };

  handleCurMLS = e => {
    this.setState({
      curMLS: e.target.value
    });
  };

  render() {
    return (
      <Row>
        <Col>
          <Form>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row form>
                  <React.Fragment>
                    {/* // STREET NUMBER */}
                    <Col md="2" lg=''className="form-group">
                      <FormGroup>
                        <label htmlFor="streetNumberId">Street Number*</label>
                        <FormInput
                          onChange={this.handleStreetNumber}
                          id="streetNumberId"
                          invalid={
                            !this.lengthValidator(this.state.streetNumber)
                          }
                        />
                        <FormFeedback invalid>
                          Enter a valid street number
                        </FormFeedback>
                      </FormGroup>
                    </Col>

                    {/* // STREET PRE-DIRECTION */}
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="preDirectionId">Pre-Direction</label>
                        <FormInput
                          onChange={this.handlePreDirection}
                          id="preDirectionId"
                        />
                      </FormGroup>
                    </Col>

                    {/* // STREET NAME */}
                    <Col md="4" className="form-group">
                      <FormGroup>
                        <label htmlFor="streetNameId">Street Name*</label>
                        <FormInput
                          onChange={this.handleStreetName}
                          id="streetNameId"
                          onBlur={() => {
                            this.streetNameValidator(this.state.streetName);
                          }}
                          invalid={
                            !(
                              this.state.streetNameValid === null ||
                              this.state.streetNameValid === true
                            )
                          }
                        />
                        <FormFeedback invalid>
                          Street Name is required
                        </FormFeedback>
                      </FormGroup>
                    </Col>

                    {/* // STREET SUFFIX */}
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="inputStreetSufixId">
                          Street Suffix
                        </label>
                        <FormInput
                          onChange={this.handleStreetSuffix}
                          id="inputStreetSufixId"
                        />
                      </FormGroup>
                    </Col>

                    {/* // Street Post Direction */}
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="inputPostDirectionId">
                          Post-Direction
                        </label>
                        <FormInput
                          onChange={this.handlePostDirection}
                          id="inputPostDirectionId"
                        />
                      </FormGroup>
                    </Col>

                    {/* // City* */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputCity">City*</label>
                      <FormInput
                        onChange={this.handleCurCity}
                        id="feInputCity"
                        onBlur={() => {
                          this.cityValidator(this.state.curCity);
                        }}
                        invalid={
                          !(
                            this.state.cityValid === null ||
                            this.state.cityValid === true
                          )
                        }
                      />
                      <FormFeedback invalid>City is required</FormFeedback>
                    </Col>

                    {/* // STATE */}
                    <Col md="2" className="form-group">
                      <label htmlFor="feInputState">State*</label>
                      <FormSelect
                        onChange={this.handleCurState}
                        id="feInputState"
                      >
                        <option>Choose...</option>
                        <option>NJ</option>
                        <option>NY</option>
                        <option>PA</option>
                      </FormSelect>
                      <FormFeedback invalid>
                        Enter a valid state name
                      </FormFeedback>
                    </Col>

                    {/* // ZIP */}
                    <Col md="2" className="form-group">
                      <label htmlFor="feInputZip">ZIP*</label>
                      <FormInput
                        onChange={this.handleCurZip}
                        id="feInputZip"
                        onBlur={() => {
                          this.zipValidator(this.state.curZip);
                        }}
                        invalid={
                          !(
                            this.state.zipValid === null ||
                            this.state.zipValid === true
                          )
                        }
                      />
                      <FormFeedback invalid>5 digit ZIP required</FormFeedback>
                    </Col>

                    {/* // MLS */}
                    <Col md="2" className="form-group">
                      <label htmlFor="feMLSNumber">MLS#</label>
                      <FormInput
                        onChange={this.handleCurMLS}
                        id="feMLSNumber"
                      />
                    </Col>
                  </React.Fragment>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default PropertyInput;
