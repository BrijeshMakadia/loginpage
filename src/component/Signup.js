import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserAuth} from '../Context/UserAuthContext';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");
    const { signUp}  = useUserAuth();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        seterror("");
        try {
            await signUp(email, password);
        }
        catch(error) {
            seterror(error.message);
        }
    };
    return (
        <>
            <div className="p-4 box Container">
            {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            {/* We'll never share your email with anyone else. */}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
                <div className="p-4 box mt-3 text-center">
                    Already Have an account? <Link to="/">Log In</Link>
                </div>
            </div>
        </>
    )
}

export default Signup