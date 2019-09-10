/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProgressItem from "./ProgressItem";
import ProgressButtons from "./ProgressButtons";

import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from "shards-react";


class SidebarProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var promptName = [
      {
        name : "Client",
        completed: this.props.clientComplete,
        promptIndex : 0
      },
      {
        name : "Subject",
        completed: this.props.subjectComplete,
        promptIndex : 1
      },
      {
        name : "Comparables",
        completed: this.props.comparablesComplete,
        promptIndex : 2
      },
      {
        name : "Market",
        completed: this.props.marketComplete,
        promptIndex : 3
      },
      {
        name : "Sources",
        completed: this.props.sourcesComplete,
        promptIndex : 4
      },
      {
        name : "Exposure",
        completed: this.props.exposureComplete,
        promptIndex : 5
      },
      {
        name : "Value",
        completed: this.props.valueComplete,
        promptIndex : 6
      },
      {
        name : "Date",
        completed: this.props.dateComplete,
        promptIndex : 7
      },
      {
        name : "Scope",
        completed: this.props.scopeComplete,
        promptIndex : 8
      },
      {
        name : "Conditions",
        completed: this.props.conditionsComplete,
        promptIndex : 9
      }
    ];
  
    // var progressList = promptName.map( (n, index) => <ProgressItem promptName={n} iconName="visibility" key={index} />);
    
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Report Overview</h6>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>

            {/* Progress bar and percentage */}
            <ListGroupItem className="px-4">
              <div className="progress-wrapper">
                <strong className="text-muted d-block mb-2">
                  Completion
                </strong>
                <Progress className="progress-sm" theme="success" value={this.props.progress}>
                  <span className="progress-value"> {this.props.progress}% </span>
                </Progress>
              </div>
            </ListGroupItem>

            <ListGroupItem className="p-3">

              {/* Geneate a list of ProgressItems and conditionally format their completion status */}
              {promptName.map( (n, index) => <ProgressItem promptName={n.name} promptIndex={n.promptIndex} iconName="visibility" key={index} completed={n.completed}/>)}

            </ListGroupItem>

              {/* Save Draft and Publish Buttons */}
              <ProgressButtons />

          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    progress : state.wizard.progress,
    clientComplete: state.report.client,
    subjectComplete: state.report.subjectComplete,
    comparablesComplete: state.report.comparablesComplete,
    marketComplete: state.report.marketComplete,
    conditionsComplete: state.report.conditionsComplete,
    sourcesComplete: state.report.sourcesComplete,
    exposureComplete: state.report.exposureComplete,
    valueComplete: state.report.valueComplete,
    dateComplete: state.report.dateComplete,
    scopeComplete: state.report.scopeComplete
  })
}

export default connect(mapStateToProps)(SidebarProgress);

// pdfData: {
//   client: 'n.a.',
  
//   subject: null,
//   inspect: "none",
//   propType: "Single Family Residential",

//   subjectHistory : 'n.a.',
//   owner : 'n.a.',
//   fuel : 'n.a.',
//   parking: 'n.a.',
//   heating : 'n.a.',
//   airCond : 'n.a.',
//   yearBuilt : 'n.a.',
//   bedCount : 'n.a.',
//   bathCount : 'n.a.',
//   gla : 'n.a.',
//   architecture : 'n.a.',
//   legalDes: 'n.a.',
//   mlsNumber : 'n.a.', 
//   marketConditions : 'n.a.',
//   additionalTransfers : 'n.a.',

//   comp1: 'n.a.',
//   comp1_GLA: 'n.a.',
//   comp1_LastPrice: 'n.a.',
//   comp1_LastDate: 'n.a.',
//   comp1_MLS: 'n.a.',
//   comp1_BedBath : 'n.a.',

//   comp2: 'n.a.',
//   comp2_GLA: 'n.a.',
//   comp2_LastPrice: 'n.a.',
//   comp2_LastDate: 'n.a.',
//   comp2_MLS: 'n.a.',
//   comp2_BedBath : 'n.a.',

//   comp3: 'n.a.',
//   comp3_GLA: 'n.a.',
//   comp3_LastPrice: 'n.a.',
//   comp3_LastDate: 'n.a.',
//   comp3_MLS: 'n.a.',
//   comp3_BedBath : 'n.a.',

//   comp4: 'n.a.',
//   comp4_GLA: 'n.a.',
//   comp4_LastPrice: 'n.a.',
//   comp4_LastDate: 'n.a.',
//   comp4_MLS: 'n.a.',
//   comp4_BedBath : 'n.a.',

//   createdDate: 'n.a.',
//   effectiveDate: 'n.a.',
//   sigInitials: 'n.a.',

//   recon: 'n.a.',
//   rtMIN: 'n.a.',
//   rtMAX: 'n.a.',

//   price: 'n.a.',
//   scopeCmmnt: 'n.a.',
//   dataSource: 'n.a.'
// },