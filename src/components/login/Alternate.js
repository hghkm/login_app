import React/* , { Component } */ from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useGoogleLogin } from '@react-oauth/google';
// import { Login } from '../../utils/login';

function AlternateLogin() {

    const login = useGoogleLogin({
            onSuccess: response => console.log(response),
            onError: error => alert(error)
    });

    return(
        <Row className="justify-content-center pt-5">
            <h6><span>Or sign in with:</span></h6>
            <Col className="text-center">
                <span className="alt-sign-in" onClick={() => login()}>
                    <FaGoogle size="25px" color="#4285F4"/>
                </span>
            </Col>
            <Col className="text-center">
                <span /* className="alt-sign-in" */>
                    <FaFacebook size="25px" color="#1877F2" />
                </span>
            </Col>
            <Col className="text-center">
                <span /* className="alt-sign-in" */>
                    <FaInstagram size="25px" color="#cd486b" />
                </span>
            </Col>
        </Row>
    )
}

export default AlternateLogin;