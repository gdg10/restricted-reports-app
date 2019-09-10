import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  //Alert
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import SideBarProgress from "../components/create/SideBarProgress";

// PROMPTS
import ClientForm from "../components/create/ClientForm";
import CompForm from "../components/create/CompForm";
import SubjectForm from "../components/create/SubjectForm";
import MarketConditionsForm from "../components/create/MarketConditionsForm";
import DataSourcesForm from "../components/create/DataSourcesForm";
import ScopeForm from "../components/create/ScopeForm";
import LimitingConditionsForm from "../components/create/LimitingConditionsForm";
import ValueForm from "../components/create/ValueForm";
import ExposureTimeForm from "../components/create/ExposureTimeForm";
import DateForm from "../components/create/DateForm";

const ReportWizard = (props) => (
  <div>
    <Container fluid className="px-0">
      {/* <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
      </Alert> */}
    </Container>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Create" subtitle="Report Wizard" className="text-sm-left" />
      </Row>
      <Row>
        <Col lg="8" className="mb-4">

          {/* RENDER THE PROMPT MATCHING: props.activePrompt */}
          {/* lock the prompt if it has been completed */}
          {props.activePrompt === 0 ? <ClientForm locked={props.clientComplete} /> : " "}
          {props.activePrompt === 1 ? <SubjectForm locked={props.subjectComplete} /> : " "}
          {props.activePrompt === 2 ? <CompForm locked={props.comparablesComplete} /> : " "}
          {props.activePrompt === 3 ? <MarketConditionsForm locked={props.marketComplete} /> : " "}
          {props.activePrompt === 4 ? <DataSourcesForm locked={props.sourcesComplete} /> : " "}
          {props.activePrompt === 5 ? <ExposureTimeForm locked={props.exposureComplete} /> : " "}
          {props.activePrompt === 6 ? <ValueForm locked={props.valueComplete} /> : " "}
          {props.activePrompt === 7 ? <DateForm locked={props.dateComplete} /> : " "}
          {props.activePrompt === 8 ? <ScopeForm locked={props.scopeComplete} /> : " "}
          {props.activePrompt === 9 ? <LimitingConditionsForm locked={props.conditionsComplete} /> : " "}

        </Col>
        <Col lg="4" className="mb-4">
          <SideBarProgress />
        </Col>
      </Row>
    </Container>
  </div>
);

const mapStateToProps = (state) => {
  return ({
    activePrompt: state.activePrompt.activePrompt,          // index of prompt to display
    clientComplete: state.report.clientComplete,            // completion status for each prompt
    subjectComplete: state.report.subjectComplete,
    comparablesComplete: state.report.comparablesComplete,
    marketComplete: state.report.marketComplete,
    conditionsComplete: state.report.conditionsComplete,
    exposureComplete: state.report.exposureComplete,
    valueComplete: state.report.valueComplete,
    dateComplete: state.report.dateComplete,
    scopeComplete: state.report.scopeComplete,
    sourcesComplete : state.report.sourcesComplete
  });
}

export default connect(mapStateToProps)(ReportWizard);