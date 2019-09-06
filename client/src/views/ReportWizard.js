import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Alert
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

          {/* RENDER PROMPT MATCHING props.activePrompt */}
          {props.activePrompt === 0 ? <ClientForm /> : " "}
          {props.activePrompt === 1 ? <SubjectForm /> : " "}
          {props.activePrompt === 2 ? <CompForm /> : " "}
          {props.activePrompt === 3 ? <MarketConditionsForm /> : " "}
          {props.activePrompt === 4 ? <DataSourcesForm /> : " "}
          {props.activePrompt === 5 ? <ExposureTimeForm /> : " "}
          {props.activePrompt === 6 ? <ValueForm /> : " "}
          {props.activePrompt === 7 ? <DateForm /> : " "}
          {props.activePrompt === 8 ? <ScopeForm /> : " "}
          {props.activePrompt === 9 ? <LimitingConditionsForm /> : " "}

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
    activePrompt: state.activePrompt.activePrompt
  });
}

export default connect(mapStateToProps)(ReportWizard);
