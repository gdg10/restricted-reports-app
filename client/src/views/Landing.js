import React from "react";
import "../utils/spin.css";
import { Redirect } from "react-router-dom";
import { Container, Button } from "shards-react";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  FormFeedback
} from "shards-react";

import {
  ListGroupItem,
  ListGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: require("../images/shards-dashboards-logo.svg"),
      password : '',
      username : '',
      date: "29 February 2019",
      validLogin : false,
      firstTry : true
    };
  }

  handlePassChange = (e) => {
    this.setState({
      password : e.target.value
    });
  }

  handleUserChange = (e) => {
    this.setState({
      username : e.target.value
    });
  }

  handleClick = () => {
    if(this.state.password.length > 0 && this.state.username.length > 0){
      this.setState({
        validLogin : true,
        firstTry : false
      });
    }else{
      this.setState({
        validLogin : false,
        firstTry : false
      });
    }
  }

  shouldLogin = () => {
    if(this.state.validLogin === true){
      return <Redirect to='/dashboard' />;
    }
    return null;
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4" style={{ position: 'relative'}}>
        {this.shouldLogin()}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Row>
            <Col className="text-center">
              <Card large className="px-3">
                <CardHeader className="border-bottom">
                  <h7 className="m-0">Welcome to</h7>
                  <h5 className="m-0">Restricted Reports</h5>
                </CardHeader>

                <ListGroup flush>
                  
                  <ListGroupItem className="">
                    <img src={this.state.backgroundImage} width="100" height="100" style={{animation: 'rotation 30s infinite linear'}} />
                  </ListGroupItem>
                  
                  <ListGroupItem className="">
                    
                    <InputGroup seamless className="mb-3 mt-1">
                      <InputGroupAddon type="prepend">
                        <InputGroupText>
                          <i className="material-icons">person</i>
                        </InputGroupText>
                      </InputGroupAddon>

                      {(this.state.validLogin === false && this.state.firstTry === false) ? (<FormInput invalid placeholder="username" id='user' onChange={this.handleUserChange} />) : 
                      (<FormInput placeholder="username" id='user' onChange={this.handleUserChange} />)}
                      
                    </InputGroup>

                    <InputGroup seamless className="mb-3">
                      <InputGroupAddon type="prepend">
                        <InputGroupText>
                          <i className="material-icons">lock</i>
                        </InputGroupText>
                      </InputGroupAddon>

                      {(this.state.validLogin === false && this.state.firstTry === false) ? (<FormInput invalid id='pass' type="password" placeholder="password" onChange={this.handlePassChange}/>) :
                      (<FormInput type="password" id='pass' placeholder="password" onChange={this.handlePassChange}/>)}
                    </InputGroup>

                    <Button className="mb-1" onClick={this.handleClick}>Login</Button>
                  </ListGroupItem>
                </ListGroup>

              {/* <CardFooter>
                v.1
              </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}


export default Landing;