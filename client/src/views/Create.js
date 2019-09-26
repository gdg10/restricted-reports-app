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
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Create" subtitle="Report Wizard" className="text-sm-left" />
                </Row>

                {this.props.curView === SELECTION ? <Selection /> : ''}
                {this.props.curView === COMPARATIVE ? <ReportWizard /> : ''}
                {this.props.curView === AVM ? '' : ''}

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        curView: state.createView.view
    });
}

export default connect(mapStateToProps)(Create);