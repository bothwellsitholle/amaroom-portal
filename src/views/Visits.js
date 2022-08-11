import React from 'react'
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import CompletedVisits from './ui/CompletedVisits';
import LogCompletedVisit from './ui/LogCompletedVisit';
import {RandomUser} from './LogASale'
import user1 from '../assets/images/users/user1.jpg'
import user2 from '../assets/images/users/user2.jpg'
import user3 from '../assets/images/users/user3.jpg'
import user4 from '../assets/images/users/user4.jpg'
import user5 from '../assets/images/users/user5.jpg'


const tableData = [
  {
    avatar: user1,
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: '073 345 1323',
    status: 'pending',
    weeks: '01 Jan 2022',
    budget: '2441 Main Rd, Bedfordview',
    id: 1000
  },
  {
    avatar: user2,
    name: 'Linda Motaung',
    email: 'hgover@gmail.com',
    project: '074 6645 1326',
    status: 'done',
    weeks: '02 Jan 2022',
    budget: '1415 Thomas St, pretoria',
    id: 1001
  },
  {
    avatar: user3,
    name: 'Mary Cooper',
    email: 'hgover@gmail.com',
    project: '063 345 0001',
    status: 'holt',
    weeks: '02 Jan 2022',
    budget: ' 389 Gemsbok St, santon',
    id: 1002
  },
  {
    avatar: user4,
    name: 'Bothwell Sithole',
    email: 'hgover@gmail.com',
    project: '061 145 3330',
    status: 'pending',
    weeks: '03 Jan 2022',
    budget: 'Street:  1535 Bo Meul St Fish Hoek',
    id: 1003
  },
  {
    avatar: user5,
    name: 'Ronald Gover',
    email: 'hgover@gmail.com',
    project: '078 845 9923',
    status: 'done',
    weeks: '06 Jan 2022',
    budget: '883 Impala St, jhb central',
    id: 1004
  },
]
const Visits = () => {
  var storedVisits = JSON.parse(localStorage.getItem('visits'))
  const [visitsData, setVisitsData] = React.useState(
    storedVisits ? storedVisits : tableData,
  )

  // localStorage.removeItem('visits')
  const onComplete = (data) => {
    console.log('data', data)
    let storedVisits = JSON.parse(localStorage.getItem('visits'))
    let today = new Date()
    let visit = {
      avatar: RandomUser(),
      name: data.fullname,
      email: data.email,
      project: data.phone,
      status: 'pending',
      weeks: `${today.toLocaleDateString().replace(/\//g, ' ')}`,
      budget: data.address,
      id: today.getTime()
    }
    console.log('storedVisits', storedVisits)
    if (storedVisits) {
      storedVisits.push(visit)
      localStorage.setItem('visits', JSON.stringify(storedVisits))
    } else {
      let visits_list = [visit]
      localStorage.setItem('visits', JSON.stringify(visits_list))
    }
    setVisitsData((prev) => [visit, ...prev])
  }

  const deleteVisit = (id) => {
    const filteredVisits = visitsData.filter(s => s.id !== id)
    setVisitsData(filteredVisits)
    localStorage.setItem('visits', JSON.stringify(filteredVisits))
  }
  return (
    <div>
      <Row>
        <Col xs='12' md='12' sm='12'>
          <Card>
            <CardTitle tag='h4' className='border-bottom p-3 mb-0'>
              Log A Completed Visit
            </CardTitle>
            <CardBody className=''>
              <LogCompletedVisit onComplete={onComplete}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='12' sm='12'>
          <Card>
            <CardTitle tag='h4' className='border-bottom p-3 mb-0'>
              Completed visits
            </CardTitle>
            <CardBody className=''>
              <CompletedVisits visitsData={visitsData} onDeleteVisit={deleteVisit}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Visits;
