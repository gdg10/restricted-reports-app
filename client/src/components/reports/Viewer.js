import React from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardHeader,
    CardBody
  } from "shards-react";

class Viewer extends React.Component {
    
    constructor(props){
        super(props);
        
    }

    render(){
        var active = !(this.props.activeReport === null);
        if(active){
            return (        
            <React.Fragment>
                <Card className="mb-3">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Report Viewer</h6>
                    </CardHeader>
    
                    <CardBody className="p-4  embed-responsive-16by9">
                        <iframe style={{height: "50vh", width:'100%'}} 
                        title='activeReport' className="embed-responsive-item" 
                        src={this.props.activeReport} 
                        allowFullScreen>
                        </iframe>
                    </CardBody>
                </Card>
            </React.Fragment>)
        }else{
            return("No reports to show right now. Publish a report in the 'Create' tab.");
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        activeReport : state.activeReport.activeReport
    });
}

export default connect(mapStateToProps)(Viewer);