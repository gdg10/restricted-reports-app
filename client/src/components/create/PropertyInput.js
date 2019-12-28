import React from "react";
import { addSubject } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import NavButtons from "./NavButtons";

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  Button,
  FormFeedback
} from "shards-react";

class PropertyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streetNumber: "",
      preDirection: "",
      streetSuffix: "",
      postDirection: "",
      streetName: "",
      curAddress2: "",
      curState: "",
      curZip: "",
      curMLS: "",
      searching: false,
      invalidSearch: false
    };
  }

  handleStreetNumber = e => {
    this.setState({
      streetName: e.target.value
    });
  };

  handlePreDirection = e => {
    this.setState({
      preDirection: e.target.value
    });
  };

  handleStreetSuffix = e => {
    this.setState({
      streetSuffix: e.target.value
    });
  };

  handlePostDirection = e => {
    this.setState({
      streetName: e.target.value
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

  handleSubmit = e => {
    e.preventDefault(); //block page refresh

    let incomplete = //prompt is incomplete if address1, city, state, and zip are not fill out
      this.state.streetName.length <= 0 ||
      this.state.curCity.length <= 0 ||
      this.state.curState.length <= 0 ||
      this.state.curZip.length <= 0;

    if (incomplete) {
      // TODO: Error message - "Please complete form to submit"
    } else {
      this.setState({
        searching: true
      });
      fetch(
        encodeURI(
          "/api/lookup/" +
            this.state.streetName +
            "/" +
            this.state.curCity +
            "/" +
            this.state.curState +
            "/" +
            this.state.curZip
        )
      )
        .then(res => res.json())
        .then(res => {
          console.log(JSON.stringify(res));
          if (res.success === true) {
            this.setState({
              searching: false, //remove searching spinner
              invalidSearch: false
            });
            this.props.dispatch(incrementProgress()); //increment report progress
            var propData = res.properties[0];
            console.log(propData);
            this.props.dispatch(
              addSubject({
                //dispatch Subject info to store
                address: this.state.streetName,
                address2: this.state.curAddress2,
                city: this.state.curCity,
                state: this.state.curState,
                zip: this.state.curZip,
                mls: this.state.curMLS,
                gla: propData.structures[0].finished_size + " sqft",
                lastSold: propData.sales[0].date,
                price: "$" + propData.sales[0].price,
                subjectHistory: "n.a.",
                owner: propData.owners[0].name,
                fuel: propData.structures[0].fuel_type,
                parking: propData.structures[0].parking_type,
                heating: propData.structures[0].heating_type,
                airCond: propData.structures[0].air_conditioning_type,
                yearBuilt: propData.structures[0].year_built,
                bedCount: propData.structures[0].beds_count,
                bathCount: propData.structures[0].baths_count,
                architecture: propData.structures[0].architecture_type,
                legalDes: propData.legal.apn_original,
                mlsNumber: "n.a.",
                additionalTransfers: "n.a."
              })
            );
          } else {
            console.log("Error: seach unsuccessful");
            this.setState({
              invalidSearch: true,
              searching: false
            });
          }
        })
        .catch(res => {
          console.log("There was an error");
          this.setState({
            invalidSearch: true,
            searching: false
          });
        });
    }
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
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="feInputAddress2">Street Number</label>
                        <FormInput
                          onChange={this.handleStreetNumber}
                          id="streetNumberId"
                        />
                      </FormGroup>
                    </Col>

                    {/* // STREET PRE-DIRECTION */}
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="feInputAddress2">Pre-Direction</label>
                        <FormInput
                          onChange={this.handlePreDirection}
                          id="preDirectionId"
                        />
                      </FormGroup>
                    </Col>

                    {/* // STREET NAME */}
                    <Col md="4" className="form-group">
                      <FormGroup>
                        <label htmlFor="feInputAddress">Street Name*</label>
                        {this.state.invalidSearch === true ? (
                          <React.Fragment>
                            <FormInput
                              invalid
                              onChange={this.handleStreetNumber}
                              id="streetNameId"
                              required
                            />
                            <FormFeedback invalid>
                              Could not find the property specified. Please try
                              again.
                            </FormFeedback>
                          </React.Fragment>
                        ) : (
                          <FormInput
                            onChange={this.handleStreetNumber}
                            id="feInputAddress"
                            required
                          />
                        )}
                      </FormGroup>
                    </Col>

                    {/* // STREET POST DIRECTION */}
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="feInputAddress2">Street Suffix</label>
                        <FormInput
                          onChange={this.handleCurAddress2}
                          id="feInputAddress2"
                        />
                      </FormGroup>
                    </Col>

                    {/* // Street Post Direction */}
                    <Col md="2" className="form-group">
                      <FormGroup>
                        <label htmlFor="feInputAddress2">Post-Direction</label>
                        <FormInput
                          onChange={this.handleCurAddress2}
                          id="feInputAddress2"
                        />
                      </FormGroup>
                    </Col>

                    {/* // City* */}
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputCity">City*</label>
                      <FormInput
                        onChange={this.handleCurCity}
                        id="feInputCity"
                        required
                      />
                    </Col>

                    {/* // STATE */}
                    <Col md="2" className="form-group">
                      <label htmlFor="feInputState">State*</label>
                      <FormSelect
                        onChange={this.handleCurState}
                        id="feInputState"
                        required
                      >
                        <option>Choose...</option>
                        <option>PA</option>
                        <option>NJ</option>
                      </FormSelect>
                    </Col>

                    {/* // ZIP */}
                    <Col md="2" className="form-group">
                      <label htmlFor="feInputZip">ZIP</label>
                      <FormInput
                        onChange={this.handleCurZip}
                        id="feInputZip"
                        required
                      />
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

                {/* BUTTONS */}
                <Row>
                  <Col>
                    {this.state.searching === false ? (
                      this.props.locked === true ? (
                        <Button
                          size="sm"
                          disabled
                          theme="success"
                          onClick={this.handleSubmit}
                        >
                          Add
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          theme="success"
                          onClick={this.handleSubmit}
                        >
                          Add
                        </Button>
                      )
                    ) : (
                      <Button disabled size="sm" theme="success">
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      </Button>
                    )}
                  </Col>
                  {/* {this.state.searching === true ? <Col>Searching...</Col>: ''} */}
                  <Col>
                    <NavButtons />
                  </Col>
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
