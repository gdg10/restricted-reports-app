import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Alert,
    Container,
    Row,
    Col,
    Button,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import ComparativeCard from "../components/create/ComparativeCard";
import AVMCard from "../components/create/AVMCard";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Create" subtitle="Report Wizard" className="text-sm-left" />
                </Row>
                <Row>
                    <Col md='4'><ComparativeCard /></Col>
                    {/* <Col md='4'><AVMCard /></Col> */}
                </Row>
            </Container>
        );
    }
}

export default Create;