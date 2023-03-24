import { Paper, Center, Text, Stack } from '@mantine/core'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const year = new Date().getFullYear()
const data = {
  labels: [
    `T1, ${year}`,
    `T2, ${year}`,
    `T3, ${year}`,
    `T4, ${year}`,
    `T5, ${year}`,
    `T6, ${year}`,
    `T7, ${year}`,
    `T8, ${year}`,
    `T9, ${year}`,
    `T10, ${year}`,
    `T11, ${year}`,
    `T12, ${year}`
  ],
  datasets: [
    {
      data: [864, 1143, 1061, 1026, 1307, 1211, 1343, 2251, 783, 2478, 783, 783],
      label: 'Africa',
      borderColor: '#3e95cd',
      fill: false
    }
    // {
    //   data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
    //   label: 'Asia',
    //   borderColor: '#8e5ea2',
    //   fill: false
    // },
    // {
    //   data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
    //   label: 'Europe',
    //   borderColor: '#3cba9f',
    //   fill: false
    // },
    // {
    //   data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
    //   label: 'Latin America',
    //   borderColor: '#e8c3b9',
    //   fill: false
    // },
    // {
    //   data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
    //   label: 'North America',
    //   borderColor: '#c45850',
    //   fill: false
    // }
  ]
}

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Custom Chart Title'
    }
  }
}

export const SaleChart = () => {
  console.log('adflkajdf')
  return (
    <Paper p={40} radius={10} shadow='md'>
      <Stack spacing={20}>
        <Center>
          <Text fw={700} size='24'>
            BIỂU ĐỒ DOANH SỐ
          </Text>
        </Center>
        <Line data={data} options={options} />
      </Stack>
    </Paper>
  )
}
