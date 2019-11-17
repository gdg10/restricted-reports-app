import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col
} from "shards-react";
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
    {/* <Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> How you doin'? Pretty cool, huh? <a href="#">Dismiss</a>
    </Alert>
    </Container> */}
    {/* <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Create" subtitle="Report Wizard" className="text-sm-left" />
      </Row> */}
      <Row>
        <Col lg="8" className="mb-4">

          {/* RENDER THE PROMPT MATCHING: props.activePrompt */}
          {/* lock the prompt if it has been completed */}
          <ClientForm locked={props.clientComplete} />
          <SubjectForm locked={props.subjectComplete} />
          <CompForm locked={props.comparablesComplete} />
          <MarketConditionsForm locked={props.marketComplete} />
          <DataSourcesForm locked={props.sourcesComplete} />
          <ExposureTimeForm locked={props.exposureComplete} />
          <ValueForm locked={props.valueComplete} />
          <DateForm locked={props.dateComplete} />
          <ScopeForm locked={props.scopeComplete} />
          <LimitingConditionsForm locked={props.conditionsComplete} />

        </Col>
        <Col lg="4" className="mb-4">
          <SideBarProgress />
        </Col>
      </Row>
    {/* </Container> */}
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