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