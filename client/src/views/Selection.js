import React from 'react';
import {
    Row,
    Col
} from "shards-react";
import ComparativeCard from "../components/create/ComparativeCard";

// display an informational card for each type of report. cards dispatch an event to change
// the view and redirect to their wizard
export default Selection = () => {
    return (
        <Row>
            <Col xs='6' sm='6' md='6' lg='4'><ComparativeCard /></Col>
            {/* <Col md='4'><AVMCard /></Col> */}
        </Row>
    )
}