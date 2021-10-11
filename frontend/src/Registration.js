import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

class Reg extends Component {
      constructor() {
        super();

        this.state = {
          Name: '',
          Username: '',
          Password: ''
        }

        this.Name = this.Name.bind(this);
        this.Username = this.Username.bind(this);
        this.Password = this.Password.bind(this);
      }

      Name(event) {
            this.setState({ Name: event.target.value })
          }
          Username(event) {
            this.setState({ Username: event.target.value })
          }
          Password(event) {
            this.setState({ Password: event.target.value })
          }

          register(event) {
            fetch('http://localhost:8080/signup', {
              method: 'post',
              headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify
                ({
                    Name: this.state.Name,
                    Username: this.state.Username,
                    Password: this.state.Password,
                })
            }).then((Response) => Response.json())
              .then((Result) => {
                if (Result.Status == 'Success')
                        this.props.history.push("/Dashboard");
                else
                  alert('User not registered!')
              })
          }

          render() {
            return (
              <div className="app flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                      <Card className="mx-4">
                        <CardBody className="p-4">
                          <Form>
                            <div class="row" className="mb-2 pageheading">
                              <div class="col-sm-12 btn btn-primary">
                                Sign Up
                                </div>
                            </div>

                            <InputGroup className="mb-3">
                              <Input type="text"  onChange={this.Name} placeholder="Enter your Full Name" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Input type="Username"  onChange={this.Username} placeholder="Username" />
                            </InputGroup>

                            <InputGroup className="mb-4">
                              <Input type="text"  onChange={this.Password} placeholder="Password" />
                            </InputGroup>
        
                            <Button  onClick={this.register}  color="success" block>Your account is registered!</Button>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          }
        }
        export default Reg;