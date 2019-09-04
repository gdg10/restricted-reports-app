import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SideBarProgress from "../components/create-new-report/SideBarProgress";
import ClientForm from "../components/create-new-report/ClientForm";
import CompForm from "../components/create-new-report/CompForm";
import SubjectForm from "../components/create-new-report/SubjectForm";
import MarketConditionsForm from "../components/create-new-report/MarketConditionsForm";
import DataSourcesForm from "../components/create-new-report/DataSourcesForm";
import ScopeForm from "../components/create-new-report/ScopeForm";
import LimitingConditionsForm from "../components/create-new-report/LimitingConditionsForm";
import ValueForm from "../components/create-new-report/ValueForm";


const ReportWizard = () => (
  <div>
    <Container fluid className="px-0">

      {/* <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
      </Alert> */}

    </Container>
    <Container fluid className="main-content-container px-4">

      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Create Report"
          subtitle="Report Wizard"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col lg="8" className="mb-4">

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Client</h6>
            </CardHeader>
            <ClientForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Subject</h6>
            </CardHeader>
            <SubjectForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Comparables</h6>
            </CardHeader>
            <CompForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Market Conditions</h6>
            </CardHeader>
            <MarketConditionsForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Data Sources</h6>
            </CardHeader>
            <DataSourcesForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Exposure Time</h6>
            </CardHeader>
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Value</h6>
            </CardHeader>
            <ValueForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Date</h6>
            </CardHeader>
            {/* <CompForm /> */}
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Scope of Work</h6>
            </CardHeader>
            <ScopeForm />
          </Card>

          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Add Limiting Conditions</h6>
            </CardHeader>
            <LimitingConditionsForm />
          </Card>

        </Col>

        <Col lg="4" className="mb-4">
          <SideBarProgress />
        </Col>

      </Row>
    </Container>
  </div>
);

export default ReportWizard;
