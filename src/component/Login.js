import React from 'react';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleButton from 'react-google-button';

function Login() {
    return (
        <>
            <div className="p-4 box Container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            {/* We'll never share your email with anyone else. */}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <br/>
                <div className="text-center d-inline-block">
                    <GoogleButton className="g-btn" type="dark" />
                </div>
                <div className="p-4 box mt-3 text-center">
                    Don't Have an account <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </>
    )
}

export default Login