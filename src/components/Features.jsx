import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../asset/img1.jpg";
import img2 from "../asset/img2.jpg";
import img3 from "../asset/img3.jpg";
import img4 from "../asset/img4.jpg";
import img5 from "../asset/img5.jpg";
import img6 from "../asset/img6.jpg";
import img7 from "../asset/img7.jpg";
import img8 from "../asset/img8.jpg";
import img9 from "../asset/img9.jpg";

const Features = () => {
  return (
    <Container id="features" className="py-5">
      <h2>Recomended for you</h2>
      <p>
        <b>Pick the best fit</b>
      </p>
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img1} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 Data visualization Masterclass</h3>
                <p>col steel</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img2} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>Python Full Course - Masterclass Available</h3>
                <p>ReRe wils</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img3} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>Java Full Course 2023 - Masterclass</h3>
                <p>Mojes agar</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img4} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 Data Structure and Algoritham</h3>
                <p>colwalker</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img5} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 HTML Master Class with Projects</h3>
                <p>Majos wee</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img7} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 Javascript Master Class</h3>
                <p>Annagk</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img6} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 Node Js Development</h3>
                <p>Malai cc</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img8} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 React Master Course</h3>
                <p>Nvv</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                <img src={img1} className="course-card" />
              </Card.Title>
              <Card.Text>
                <h3>2024 C++ Advance Course</h3>
                <p>Vss JK</p>
                <p>4.9 ⭐⭐⭐⭐ </p>
                <p>
                  RS: 499 <del>1999</del>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
