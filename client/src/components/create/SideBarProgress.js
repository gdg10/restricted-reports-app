/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from "shards-react";

class SidebarProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Report Overview</h6>
        </CardHeader>

        <CardBody className="p-0">
          <ListGroup flush>

            {/* Progress bar and percentage */}
            <ListGroupItem className="px-4">
              <div className="progress-wrapper">
                <strong className="text-muted d-block mb-2">
                  Completion
                </strong>
                <Progress className="progress-sm" value="25">
                  <span className="progress-value"> 25% </span>
                </Progress>
              </div>
            </ListGroupItem>

            <ListGroupItem className="p-3">

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Client:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Subject:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Comparables:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Conditions:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Sources:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Exposure:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Value:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Date:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Scope:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>

              <span className="d-flex mb-2">
                <i className="material-icons mr-1">visibility</i>
                <strong className="mr-1">Conditions:</strong>{" "}
                <strong className="text-warning">Incomplete</strong>{" "}
                <a className="ml-auto" href="#">
                  Edit
              </a>
              </span>


            </ListGroupItem>

            <ListGroupItem className="d-flex px-3">
              <Button outline theme="accent" size="sm">
                <i className="material-icons">save</i> Save Draft
            </Button>
              <Button theme="accent" size="sm" className="ml-auto">
                <i className="material-icons">file_copy</i> Publish
            </Button>
            </ListGroupItem>

          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(SidebarProgress);