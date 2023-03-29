import { Paper, Center, Text, Stack, Group, Button, Flex } from '@mantine/core'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useState } from 'react'
import { getChartData } from '@/utils/getChartData'

const year = new Date().getFullYear()

const options = {
  plugins: {
    title: {
      display: true
      // text: 'Custom Chart Title'
    },
    legend: {
      display: false,
      labels: {
        color: 'rgb(255, 99, 132)',
        padding: 20,
        boxWidth: 60,
        boxHeight: 30,
        borderRadius: 10
      }
    }
  }
}

const durationLabel = [
  {
    id: 0,
    label: 'ALL'
  },
  {
    id: 1,
    label: '1Y'
  },
  {
    id: 2,
    label: '1M'
  },
  {
    id: 3,
    label: '1W'
  },
  {
    id: 4,
    label: '1D'
  }
]

interface DataChartProps {
  labels: string[]
  datasets: {
    data: number[]
    label: string
    borderColor: string
    fill: boolean
  }[]
}
;[]

export const SaleChart = () => {
  const [select, setSelect] = useState<number>(0)
  const label = {
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
    ]
  }

  const data: DataChartProps = { ...label, ...getChartData(select) }
  console.log('data', { data })

  return (
    <Paper p={40} radius={10} shadow='md'>
      <Stack spacing={20}>
        <Center>
          <Text fw='bold' size={24}>
            BIỂU ĐỒ DOANH SỐ
          </Text>
        </Center>
        <Flex align='center' justify='space-between' mr={5}>
          <Group spacing={5}>
            {durationLabel.map(({ id, label }, index) => (
              <Button
                variant='light'
                sx={{
                  width: 60,
                  height: 30
                }}
                color={select === index ? 'red' : 'dark.5'}
                radius={10}
                onClick={() => setSelect(id)}
                p={2}
                key={index}
              >
                <Text size={12} fw='bolder' lh={1.1}>
                  {label}
                </Text>
              </Button>
            ))}
          </Group>
          <Group>
            <Text size={12} lh={1.1}>
              1 tháng 1, 2023
            </Text>
          </Group>
        </Flex>
        <Line data={data} options={options} />
      </Stack>
    </Paper>
  )
}
