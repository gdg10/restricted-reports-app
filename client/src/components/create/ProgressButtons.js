import React, { Component } from "react";
import { connect } from "react-redux"
import { makeActiveReport } from "../../redux/actions/activeReportActions";

import {
    ListGroupItem,
    Button,
} from "shards-react";

class ProgressButtons extends Component {

    constructor(props) {
        super(props);
    }

    mapReportStateToReportData(rs){
        return ({
            client: rs.client,
		
            subject: rs.subject.address + " " + rs.subject.address2 + ", " + rs.subject.city + ", " + rs.subject.state + ", " + rs.subject.zip,
            inspect: "none",
            propType: "Single Family Residential",
    
            subjectHistory : 'n.a.',
            owner : 'n.a.',
            fuel : 'n.a.',
            parking: 'n.a.',
            heating : 'n.a.',
            airCond : 'n.a.',
            yearBuilt : 'n.a.',
            bedCount : 'n.a.',
            bathCount : 'n.a.',
            gla : 'n.a.',
            architecture : 'n.a.',
            legalDes: 'n.a.',
            mlsNumber : 'n.a.', 
            marketConditions : rs.market,
            additionalTransfers : 'n.a.',
    
            comp1: rs.comparables[0].address + " " + rs.comparables[0].address2 + ", " + rs.comparables[0].city + ", " + rs.comparables[0].state + ", " + rs.comparables[0].zip,
            comp1_GLA: 'n.a.',
            comp1_LastPrice: 'n.a.',
            comp1_LastDate: 'n.a.',
            comp1_MLS: 'n.a.',
            comp1_BedBath : 'n.a.',
    
            comp2: rs.comparables[1].address + " " + rs.comparables[1].address2 + ", " + rs.comparables[1].city + ", " + rs.comparables[1].state + ", " + rs.comparables[1].zip,
            comp2_GLA: 'n.a.',
            comp2_LastPrice: 'n.a.',
            comp2_LastDate: 'n.a.',
            comp2_MLS: 'n.a.',
            comp2_BedBath : 'n.a.',
    
            comp3: rs.comparables[2].address + " " + rs.comparables[2].address2 + ", " + rs.comparables[2].city + ", " + rs.comparables[2].state + ", " + rs.comparables[2].zip,
            comp3_GLA: 'n.a.',
            comp3_LastPrice: 'n.a.',
            comp3_LastDate: 'n.a.',
            comp3_MLS: 'n.a.',
            comp3_BedBath : 'n.a.',
    
            comp4: rs.comparables[3].address + " " + rs.comparables[3].address2 + ", " + rs.comparables[3].city + ", " + rs.comparables[3].state + ", " + rs.comparables[3].zip,
            comp4_GLA: 'n.a.',
            comp4_LastPrice: 'n.a.',
            comp4_LastDate: 'n.a.',
            comp4_MLS: 'n.a.',
            comp4_BedBath : 'n.a.',
    
            createdDate: rs.createDate,
            effectiveDate: rs.effectiveDate,
            sigInitials: 'EG',
    
            recon: rs.rec,
            exposureTimeMin: rs.exposureTimeMin,
            exposureTimeMax: rs.exposureTimeMax,
    
            price: "$" + rs.minVal + "- $" + rs.maxVal,
            scopeCmmnt: rs.scope + " " + rs.conditions,
            source: rs.source
        });
    }

    // CALL THE BACKEND AND REQUEST A PDF
    handlePublish = () => {
        var data = JSON.stringify(this.mapReportStateToReportData(this.props.reportState));
        fetch('/api/getPDF/' + data)
            .then(res => res.json())
            .then(res => res.replace(/\\/g, ""))
            .then(res => JSON.parse(res))
            .then(res => this.props.dispatch(makeActiveReport(res.response)))
    }

    //CALL THE BACKEND AND REQUEST PUSH TO DATA BASE
    handleSave = () => {
        // TODO
    }

    render() {

        // SHOULD BUTTONS BE DISABLED? a function of progress
        var saveDisabled = this.props.progress <= 0;
        // var publishDisabled = false;
        var publishDisabled = this.props.progress !== 100; //logic disabled for testing

        return (
            <ListGroupItem className="d-flex px-3">

                {/* SAVE BUTTON */}
                {saveDisabled === true ?
                    (<Button outline disabled theme="accent" size="sm"><i className="material-icons">save</i> Save Draft </Button>)
                    : (<Button outline theme="accent" size="sm"><i className="material-icons">save</i> Save Draft</Button>)
                }

                {/* PUBLISH BUTTON */}
                {publishDisabled === true ?
                    (<Button disabled theme="accent" size="sm" className="ml-auto"><i className="material-icons">file_copy</i> Publish</Button>)
                    : (<Button onClick={this.handlePublish} theme="accent" size="sm" className="ml-auto"><i className="material-icons">file_copy</i> Publish </Button>)
                }

            </ListGroupItem>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        progress: state.wizard.progress,
        reportState : state.report
    });
}

export default connect(mapStateToProps)(ProgressButtons);