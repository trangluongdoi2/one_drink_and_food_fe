import { Paper, Text, RingProgress, Grid, Center, Stack, Flex } from '@mantine/core'
import { IconCircleFilled } from '@tabler/icons-react'

interface ChartDataProps {
  value: number
  color: string
  title: string
}

interface RingChartProps {
  label: string
  data: ChartDataProps[]
}

const data1 = [
  { value: 40, color: '#FE5F51', title: 'Nam' },
  { value: 60, color: '#46CFC7', title: 'Nữ' }
]

const data2 = [
  { value: 40, color: '#FE5F51', title: 'Dưới 18' },
  { value: 15, color: '#46CFC7', title: '18 - 40' },
  { value: 45, color: '#434343', title: 'Trên 40' }
]

const ChartLegend = ({ value, color, title }: ChartDataProps) => {
  return (
    <Flex justify='center' gap={8}>
      <IconCircleFilled style={{ color: color }} />
      <Text>{`${title} ${value}%`}</Text>
    </Flex>
  )
}

const RingChart = ({ label, data }: RingChartProps) => {
  return (
    <Paper radius={10} shadow='md'>
      <Stack spacing={0}>
        <Center>
          <RingProgress
            label={
              <Text align='center' fw={700} size={24} tt='uppercase'>
                {label}
              </Text>
            }
            size={500}
            thickness={75}
            sections={data}
          />
        </Center>

        <Center mb={35}>
          <Flex gap={20}>
            {data.map((item, index) => (
              <ChartLegend {...item} key={index} />
            ))}
          </Flex>
        </Center>
      </Stack>
    </Paper>
  )
}

export const AnalysisChart = () => {
  return (
    <Grid gutter={20}>
      <Grid.Col span={6}>
        <RingChart label={'TỈ LỆ GIỚI TÍNH'} data={data1} />
      </Grid.Col>
      <Grid.Col span={6}>
        <RingChart label={'TỈ LỆ ĐỘ TUỔI'} data={data2} />
      </Grid.Col>
    </Grid>
  )
}
