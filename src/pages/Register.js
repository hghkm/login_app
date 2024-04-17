import React, { Component } from 'react';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
import { TextInput } from '../components/register';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surname: '',
            email: '',
            password: '',
            checked: false
        }
        this.setText = this.setText.bind(this)
    }

    setText(e) {
        e.preventDefault();
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        return (
            <div className="wrapper">
                <Container>
                    <div className="col-md-10 mx-auto pt-5">
                        <Card className="p-4">
                            <div className="d-flex border-bottom">
                                <h5>Register:</h5>
                                <a href="/login" className="ms-auto">Go back</a>
                            </div>
                            <Form>
                                <Row>
                                    <TextInput type="text" id="firstName" title="First name" 
                                        setText={this.setText} value={this.state.firstName}
                                        style={{ width: "50%" }} 
                                    />
                                    <TextInput type="text" id="surname" title="Surname" 
                                        setText={this.setText} value={this.state.surname}
                                        style={{ width: "50%" }} 
                                    />
                                </Row>
                                <TextInput type="email" id="email" title="Email" 
                                    setText={this.setText} value={this.state.email}
                                />
                                <TextInput id="password" title="New password" 
                                    type={this.state.show ? "text": "password"} 
                                    setText={this.setText} 
                                    value={this.state.password}
                                    body= {<div className="d-flex border-bottom py-1">
                                            <Form.Check id="password" type="checkbox" label="Show password" 
                                                onChange={() => this.setState({ show: !this.state.show })} 
                                                value={this.state.show}
                                            />
                                        </div>}
                                />
                                <Form.Group className="my-3">
                                    <Form.Check id="terms" type="checkbox" label="Agree to Terms & Conditions" 
                                        onChange={() => this.setState({ checked: !this.state.checked })} 
                                        value={this.state.checked}
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-center mt-3">
                                    <Button variant="primary" type="submit" className="w-50">Register</Button>
                                </div>
                            </Form>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Register;