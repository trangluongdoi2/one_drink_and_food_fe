import { useUserFormContext } from '@/context/form-context'
import { Center, Divider, Flex, Grid, Paper, ScrollArea, Stack, Tabs, Text, Image, clsx } from '@mantine/core'
import { tabHeader } from '@/constants/history/tab'
import { IconChevronRight } from '@tabler/icons-react'
import { ORDER_STATUS } from '@/types/order'
import { useState } from 'react'
import empty from '@/assets/image/empty.png'
import { getStatus } from '@/utils/getStatus'
import { HistoryRow } from './HistoryRow'
import { useStyles } from './index.style'

const { CANCEL, PAID, PAYMENTING, PREPARING, SHIPPING } = ORDER_STATUS

const mockData = [
  {
    id: '130100140',
    price: 1000000,
    date: '04/03/2023 14:15',
    status: PAYMENTING
  },
  {
    id: '130100140',
    price: 1000000,
    date: '04/03/2023 14:15',
    status: CANCEL
  },
  {
    id: '130100140',
    price: 1000000,
    date: '04/03/2023 14:15',
    status: PREPARING
  },
  {
    id: '130100140',
    price: 1000000,
    date: '04/03/2023 14:15',
    status: SHIPPING
  },
  {
    id: '130100140',
    price: 1000000,
    date: '04/03/2023 14:15',
    status: PAID
  },
  {
    id: '130100140',
    price: 1000000,
    date: '04/03/2023 14:15',
    status: PAYMENTING
  }
]

const HistoryPanel = () => {
  const [activeTab, setActiveTab] = useState<string | null>(PAYMENTING)
  const { classes } = useStyles()

  return (
    <Tabs defaultValue={PAYMENTING} orientation='vertical' onTabChange={setActiveTab} color='dark'>
      <Grid w='100%' gutter={20}>
        <Grid.Col span={6}>
          <Paper shadow='md' p={20}>
            <Tabs.List>
              {tabHeader.map(({ value, title }, index) => {
                return (
                  <Tabs.Tab
                    value={value}
                    h={60}
                    key={index}
                    rightSection={<IconChevronRight color='gray' />}
                    className={clsx(classes.tab, { [classes.shadow]: activeTab === value })}
                  >
                    {title}
                  </Tabs.Tab>
                )
              })}
            </Tabs.List>
          </Paper>
        </Grid.Col>

        <Grid.Col span={6}>
          {tabHeader.map(({ value }, index) => {
            const data = mockData.filter((item) => item.status === value)

            return (
              <Tabs.Panel value={value} key={index}>
                <Paper shadow='md' radius={10} pt={10}>
                  <ScrollArea h={400}>
                    {data ? (
                      <Stack spacing={10}>
                        {data.map((row) => (
                          <HistoryRow key={row.id} {...row} />
                        ))}
                      </Stack>
                    ) : (
                      <Center mt={30}>
                        <Stack justify='center' align='center'>
                          <Image src={empty} height={87} width={87} />
                          <Text>Bạn chưa có phần quà nào được đổi</Text>
                        </Stack>
                      </Center>
                    )}
                  </ScrollArea>
                </Paper>
              </Tabs.Panel>
            )
          })}
        </Grid.Col>
      </Grid>
    </Tabs>
  )
}

export default HistoryPanel
