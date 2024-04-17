import React, { Component } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

import { TextInput } from '../components/register';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.setText = this.setText.bind(this);
    }

    setText(e) {
        e.preventDefault();
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        return(
            <div className="wrapper">
                <Container>
                    <div className="col-6 col-md-6 mx-auto pt-5">
                        <Card className="p-4">
                            <div className="d-flex border-bottom">
                                <h5>Account Recovery:</h5>
                                <a href="/login" className="ms-auto">Go back</a>
                            </div>

                            <Form>
                                <TextInput 
                                    type="email" id="email" 
                                    title="Enter your email to recover your account"
                                    setText={this.setText} 
                                    value={this.state.email} 
                                    style={{marginBottom: "1rem", marginTop: "1rem"}}
                                />
                                <Button variant="primary" type="submit" className="w-100">Submit</Button>
                            </Form>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }

}

export default ForgotPassword;