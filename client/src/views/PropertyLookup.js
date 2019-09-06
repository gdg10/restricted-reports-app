import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  CardHeader
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PropertyForm from "../components/property-lookup/PropertyForm";
import PropertyTable from "../components/property-lookup/PropertyTable";

class PropertyLookup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Property Lookup" subtitle="Estated API" className="text-sm-left" />
        </Row>

        <Row><Col>Estated API property lookup coming soon...</Col></Row>
        {/*  Commemented out temporarilty for production build */}
        {/* <Row>
          <Col>
          <Card small className="mb-4">
            <PropertyForm />
          </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Results</h6>
            </CardHeader>
            <PropertyTable />
          </Card>
          </Col>
        </Row> */}


      </Container>
    );
  }
}

export default PropertyLookup;