import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import Account from './ui/Account';


const Accounts = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Update Profile
            </CardTitle>
            <CardBody className="">
              <Account />
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
  );
};

export default Accounts;
