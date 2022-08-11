import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, CardSubtitle } from 'reactstrap'
import Sale from './ui/Sale'
import SaleList from './ui/SalesList'
import user1 from '../assets/images/users/user1.jpg'
import user2 from '../assets/images/users/user2.jpg'
import user3 from '../assets/images/users/user3.jpg'
import user4 from '../assets/images/users/user4.jpg'
import user5 from '../assets/images/users/user5.jpg'

export const users = [user1, user2, user3, user4, user5]

export const RandomUser = () => {
  return users[Math.floor(Math.random() * 5)]
}


const tableData = [
  {
    avatar: user1,
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: '073 345 1323',
    status: 'pending',
    weeks: '01 Jan 2022',
    budget: '2441 Main Rd, Bedfordview',
    amount: '2500',
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
    amount: '7500',
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
    amount: '2000',
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
    amount: '2500',
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
    amount: '3500',
    id: 1004
  },
]

const LogASale = () => {
  var storedSales = JSON.parse(localStorage.getItem('sales'))
  const [salesData, setSalesData] = React.useState(
    storedSales ? storedSales : tableData,
  )

  const onLogSale = (data) => {
    console.log('data', data)
    let storedSales = JSON.parse(localStorage.getItem('sales'))
    let today = new Date()
    let sale = {
      avatar: RandomUser(),
      name: data.fullname,
      email: data.email,
      project: data.phone,
      status: 'pending',
      weeks: `${today.toLocaleDateString().replace(/\//g, ' ')}`,
      budget: data.address,
      amount: data.amount,
      id: today.getTime()
    }
    console.log('storedSales', storedSales)
    if (storedSales) {
      storedSales.push(sale)
      localStorage.setItem('sales', JSON.stringify(storedSales))
    } else {
      let sales_items = [sale]
      localStorage.setItem('sales', JSON.stringify(sales_items))
    }
    setSalesData((prev) => [sale, ...prev])
  }

  const deleteSale = (id) => {
    const filteredSales = salesData.filter(s => s.id !== id)
    setSalesData(filteredSales)
    localStorage.setItem('sales', JSON.stringify(filteredSales))
  }
  return (
    <div>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Log A Sale
            </CardTitle>
            <CardBody className="">
              <Sale onLogSale={onLogSale} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
              Your Recent Sales
                <CardSubtitle className="text-muted  p-3 mb-0" tag="h6">
                  Total: R
                  {salesData.reduce(
                    (acc, curr) => acc + parseFloat(curr.amount),
                    0,
                  )}
              </CardSubtitle>
            </CardTitle>
            <CardBody className="">
              <SaleList salesData={salesData} deleteSale={deleteSale}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LogASale
