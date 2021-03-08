import React from "react";
import Layout from "./../../components/Layout/Layout.index";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import Input from "../../components/UI/Input/Input.index";

function Signin() {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6,offset:3}}>
            <Form>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={()=>{}}
              />

              <Input
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={()=>{}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signin;
