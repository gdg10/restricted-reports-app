import React from "react";
import { connect } from "react-redux";
import { addSubject } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import PropertyInput from "./PropertyInput";

import {
  Card,
  CardHeader,
} from "shards-react";

class SubjectForm extends React.Component {
  constructor(props) {
    super(props);
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

  handleStreetNumber = e => {
    this.setState({
      streetName: e.target.value
    });
  };

  handleCurAddress2 = e => {
    this.setState({
      curAddress2: e.target.value
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
      //console.log(encodeURI('/api/lookup/' + this.state.streetName + '/' + this.state.curCity + '/' + this.state.curState + '/' + this.state.curZip));
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
      <React.Fragment>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Add Subject</h6>
          </CardHeader>
          <PropertyInput />
          </Card>
      </React.Fragment>
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
