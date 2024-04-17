import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';

import { TextInput } from '../register';

class PrimaryLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <Form>

                <TextInput
                    title="Email" id="email" type="email"
                    setText={this.setText} value={this.state.email} 
                    logo={<InputGroup.Text><FaUser /></InputGroup.Text>}
                />

                <TextInput 
                    title="Password" id="password" 
                    type={this.state.show ? "text": "password"}
                    setText={this.setText} 
                    value={this.state.password}
                    logo={<InputGroup.Text><FaLock /></InputGroup.Text>}
                    body={<div className="d-flex border-bottom py-1">
                            <Form.Check id="password" type="checkbox" label="Show password" 
                                onChange={() => this.setState({ show: !this.state.show })} 
                                value={this.state.show}
                            />
                            <a href="/forgotPassword" className="forgot ms-auto">Forgot password?</a>
                        </div>}
                />

                <Form.Group className="my-3">
                    <Form.Check id="remember" type="checkbox" label="Remember me" 
                        onChange={() => this.setState({ checked: !this.state.checked })} 
                        value={this.state.checked}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">Login</Button>
            </Form>
        )
    }
}

export default PrimaryLogin;