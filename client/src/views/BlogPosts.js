/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Viewer from "../components/reports/Viewer";
import PublishedTable from "../components/reports/PublishedTable";


class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Reports" subtitle="Drafts & Published" className="text-sm-left" />
        </Row>
        <Row md='12'>
          <Col md='12'>
            <Viewer />
          </Col>
        </Row>
        <Row>
          <Col>
            <PublishedTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
