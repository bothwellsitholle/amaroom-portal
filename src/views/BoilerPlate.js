import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const Visits = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Log a visit
            </CardTitle>
            <CardBody className="">
              
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Completed visits
            </CardTitle>
            <CardBody className="">
              
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
  );
};

export default Visits;
