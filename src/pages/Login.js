import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import { PrimaryLogin, AlternateLogin } from '../components/login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = process.env.REACT_APP_CLIENT_ID;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <GoogleOAuthProvider clientId={clientId}>
                <div className="wrapper">
                    <Container>
                        <div className="login col-6 col-md-6 mx-auto pt-5">
                            <Card className="p-4">
                                <PrimaryLogin />
                                <AlternateLogin />

                                <span className="pt-5 text-center">
                                    Don't have an account? Register <a href="/register">here</a>
                                </span>
                            </Card>
                        </div>
                    </Container>
                </div>
            </GoogleOAuthProvider>
        )
    }
}

export default Login;