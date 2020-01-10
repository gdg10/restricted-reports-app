import React from "react";
import { connect } from "react-redux";
import { addSubject } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import PropertyInput from "./PropertyInput";

import {
  Card,
  Row,
  Col,
  CardHeader,
  Button
} from "shards-react";

class SubjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      streetName: "",
      curAddress2: "",
      curState: "",
      curZip: "",
      curMLS: "",
      searching: false,
      invalidSearch: false
    };
  }

  handleSubmit = e => {
    e.preventDefault(); //block page refresh

    const result = this.child.current.getPropertyInput();
    console.log(result);

    let incomplete = result.isValid;

    if (incomplete) {
      // TODO: Error message - "Please complete form to submit"
    } else {
      this.setState({
        searching: true
      });
      //console.log(encodeURI('/api/lookup/' + this.state.streetName + '/' + this.state.curCity + '/' + this.state.curState + '/' + this.state.curZip));
      fetch(
        encodeURI(
          "/api/lookup/" +
            this.result.streetNumber +
            "/" +
            this.result.preDirection +
            "/" +
            this.result.streetSuffix +
            "/" +
            this.result.postDirection +
            "/" +
            this.result.streetName +
            "/" +
            this.result.curCity +
            "/" +
            this.result.curZip
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
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Add Subject</h6>
          </CardHeader>
          <PropertyInput ref={this.child} />
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
                </Row>
          </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    address: state.report.subject.address,
    address2: state.report.subject.address2,
    city: state.report.subject.city,
    state: state.report.subject.state,
    zip: state.report.subject.zip
  };
};

export default connect(mapStateToProps)(SubjectForm);
