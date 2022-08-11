import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap'
import Chart from 'react-apexcharts'

const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 2,
      },
    },
    colors: ['#0d6efd', '#009efb', '#6771dc'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '60%',
              borderRadius: 7,
            },
          },
        },
      },
    ],
  }
  const series = [
    {
      name: '2022',
      data: [10, 20, 40, 60, 20, 40, 90],
    },
  ]

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Your % Conversion Rate</CardTitle>
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  )
}

export default SalesChart
