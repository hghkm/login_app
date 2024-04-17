import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function TextInput({ title, type, id, value, style, logo, body, setText }) {


        return (
            <Form.Group style={style}>
                <Form.Label className="login-label">{title}:</Form.Label>
                <InputGroup>
                    {logo}
                    <Form.Control id={id} type={type} 
                        /* placeholder={title} */ 
                        onChange={setText} value={value}
                    />
                </InputGroup>
                {body}
            </Form.Group>
        )

}

export default TextInput;