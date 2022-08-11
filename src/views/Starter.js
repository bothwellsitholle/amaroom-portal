import { Col, Row } from 'reactstrap';
import SalesChart from '../components/dashboard/SalesChart';
import Ratings from '../components/dashboard/Ratings';
import ProjectTables from '../components/dashboard/ProjectTable';


const Starter = () => {
  return (
    <div>
      <Row>
        <Col sm='6' lg='6' xl='7' xxl='6'>
          <SalesChart />
        </Col>
        <Col sm='6' lg='6' xl='7' xxl='6'>
          <Ratings />
        </Col>
      </Row>
      <Row>
        <Col lg='12'>
          <ProjectTables />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
