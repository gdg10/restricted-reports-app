import React from "react";
import { connect } from "react-redux";
import { removeComp } from "../../redux/actions/reportActions"
import { Button } from "shards-react";

// TABLE ROW DISPLAYING A SALES COMPARABLE
const CompFormRow = (props) => {
    return (
        <tr>

            {/* COMP INFO */}
            {/* <td>{props.number + 1}</td> */}
            <td>{props.comp.address}</td>
            <td>{props.comp.city}</td>
            {/* <td>{props.comp.state}</td> */}
            {/* <td>{props.comp.zip}</td> */}
            <td>{props.comp.lastSold}</td>
            <td>{props.comp.price}</td>
            <td>{props.comp.bedBath}</td>
            <td>{props.comp.gla}</td>

            
            {/* BUTTON THAT WILL REMOVE ROW FROM TABLE ONCLICK */}
            <td>
                <Button outline onClick={()=>{
                        props.dispatch(removeComp(props.number))
                    }} theme="danger">X</Button>
            </td>
        </tr>
    )
}

export default connect()(CompFormRow);