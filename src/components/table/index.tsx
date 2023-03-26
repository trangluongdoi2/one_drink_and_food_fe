import { useState } from 'react'
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  TextInput,
  Avatar,
  Checkbox,
  Stack,
  Paper,
  Flex,
  Pagination,
  Center
} from '@mantine/core'
import { keys } from '@mantine/utils'
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react'
import { useStyles } from './index.style'
import { EditIcon } from '@/assets/icon'
import { UserProps } from '@/types/user'

// interface RowData {
//   name: string
//   email: string
//   company: string
// }

type RowData = UserProps

interface CustomTableProps {
  data: RowData[]
}

interface ThProps {
  width: number
  children?: React.ReactNode
  reversed: boolean
  sorted: boolean
  onSort(): void
  position?: 'left' | 'right' | 'center'
}

function Th({ width, children, reversed, sorted, onSort, position = 'left' }: ThProps) {
  const { classes } = useStyles()
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector
  return (
    <th className={classes.th} style={{ width: width }}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position={position}>
          <Text fw={300} fz={12}>
            {children}
          </Text>
          {/* <Center className={classes.icon}>
            <Icon size='0.9rem' stroke={1.5} />
          </Center> */}
        </Group>
      </UnstyledButton>
    </th>
  )
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim()
  return data.filter((item) => keys(data[0]).some((key) => item[key].toLowerCase().includes(query)))
}

function sortData(data: RowData[], payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }) {
  const { sortBy } = payload

  if (!sortBy) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy])
      }

      return a[sortBy].localeCompare(b[sortBy])
    }),
    payload.search
  )
}

const CustomTable = ({ data }: CustomTableProps) => {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
  }

  const rows = sortedData.map((row) => (
    <tr
      key={row.id}
      style={{
        height: 60,
        backgroundColor: '#f5f5f5',
        borderCollapse: 'collapse',
        borderRadius: '10px',
        width: '100%'
      }}
    >
      <td style={{ padding: '0px', backgroundColor: '#fff' }}>
        <Checkbox color='dark' size='lg' radius={10} />
      </td>
      <td
        style={{
          padding: '20px',
          fontSize: '12px',
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px'
        }}
      >
        <Avatar src={row.avatar} />
      </td>
      <td style={{ padding: '0px', fontSize: '12px' }}>{row.firstName}</td>
      <td style={{ padding: '0px', fontSize: '12px' }}>{row.lastName}</td>
      <td style={{ padding: '0px', fontSize: '12px' }}>{row.email}</td>
      <td style={{ padding: '0px', fontSize: '12px' }}>{row.phone}</td>
      <td style={{ padding: '0px', fontSize: '12px' }}>{row.gender}</td>
      <td style={{ padding: '0px', fontSize: '12px' }}>{row.dob}</td>
      <td style={{ padding: '0px', fontSize: '12px', textAlign: 'center' }}>{row.member}</td>
      <td
        style={{
          padding: '10px',
          fontSize: '12px',
          textAlign: 'right',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px'
        }}
      >
        <EditIcon />
      </td>
    </tr>
  ))

  return (
    <>
      <TextInput
        placeholder='Search by any field'
        mb='md'
        icon={<IconSearch size='0.9rem' stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <table style={{ width: '100%', borderSpacing: '0 15px' }}>
        <thead style={{ fontSize: 12 }}>
          <tr>
            <Th
              sorted={sortBy === 'firstName'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={35}
            ></Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={60}
              position='center'
            >
              Avatar
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={60}
            >
              Họ
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={60}
            >
              Tên
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={150}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={100}
            >
              Số điện thoại
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={60}
            >
              Giới tính
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={60}
            >
              Ngày sinh
            </Th>
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={60}
              position='center'
            >
              Thành viên
            </Th>{' '}
            <Th
              sorted={sortBy === 'email'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('email')}
              width={30}
            >
              Công cụ
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align='center'>
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Center>
        <Pagination
          total={10}
          color='dark.1'
          radius={10}
          sx={{
            control: {
              color: '#000',
              backgroundColor: 'gray.2'
            }
          }}
        />
      </Center>
    </>
  )
}

export default CustomTable
