import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import Notifications from './ui/Notifications';
import UpdatePassword from './ui/UpdatePassword';


const Settings = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Settings
            </CardTitle>
            <CardBody className="">
              <Notifications />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Update Password
            </CardTitle>
            <CardBody className="">
              <UpdatePassword />
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
  );
};

export default Settings;
