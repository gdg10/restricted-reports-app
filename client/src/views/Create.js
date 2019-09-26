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
import Selection from './Selection';
import ReportWizard from './ReportWizard';
var SELECTION = 1;
var COMPARATIVE = 2;
var AVM = 3;

// this view toggles between report type selection, comparative report wizard, avm wizard

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curView: 1
        };
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Create" subtitle="Report Wizard" className="text-sm-left" />
                </Row>

                {this.state.curView === SELECTION ? <Selection /> : ''}
                {this.state.curView === COMPARATIVE ? <ReportWizard /> : ''}
                {this.state.curView === AVM ? '' : ''}

            </Container>
        );
    }
}

export default Create;