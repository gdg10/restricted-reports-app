import React from 'react';
import {
    Row,
    Col
} from "shards-react";
import ReportTypeCard from "../components/create/ReportTypeCard";

// display an informational card for each type of report. cards dispatch an event to change
// the view and redirect to their wizard
export default Selection = () => {
    return (
        <Row>
            <Col xs='12' sm='6' md='6' lg='4'><ReportTypeCard title={"Comparative Property Report"} des={"Compare a subject property to similar sales. Determine a price range."} view={2}/></Col>
        </Row>
    )
}