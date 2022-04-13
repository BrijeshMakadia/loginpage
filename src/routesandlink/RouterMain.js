import React, { lazy } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from '../Context/UserAuthContext';
const Login = lazy(() => import('../component/Login'));
const Signup = lazy(() => import('../component/Signup'));

function RouterMain() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='signup' element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RouterMain;