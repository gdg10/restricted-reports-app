import React from 'react';
import {
    Row,
    Col
} from "shards-react";
import ComparativeCard from "../components/create/ComparativeCard";

export default Selection = () => {
    return (
        <Row>
            <Col md='4'><ComparativeCard /></Col>
            {/* <Col md='4'><AVMCard /></Col> */}
        </Row>
    )
}