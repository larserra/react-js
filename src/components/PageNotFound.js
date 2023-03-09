import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main>
      <Row className="text-center m-5 p-5" >
      <Col>
        <Image src="" alr="logo 404 bg" />
        <h1> 404 Page Not Found !</h1>
        <p>We ca't seem to find the page you're looking for</p>
        <Link to="/">Return to main</Link>
        </Col>
      </Row>
    </main>
  );
};

export default PageNotFound;
