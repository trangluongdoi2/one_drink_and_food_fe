import { EditIcon, ActiveEditIcon } from '@/assets/icon'
import { MEMBERSHIP, UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon, Text, TextInput, Select, MantineTheme } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'
import styled from '@emotion/styled'

interface ITableRow {
  row: UserProps
  selectedRow: string[]
  setSelectedRow: Dispatch<SetStateAction<string[]>>
}

export const TableRow = ({ row, setSelectedRow, selectedRow }: ITableRow) => {
  const dateFormat = getDateFirebase(row.dob)
  const [edit, setEdit] = useState<boolean>(false)
  const { fireBaseId: id } = row

  const isSelected = selectedRow.includes(id)

  const handleSelectedRow = () => {
    // setChecked(!checked)
    if (!selectedRow.includes(id)) {
      setSelectedRow([...selectedRow, id])
    } else {
      setSelectedRow(selectedRow.filter((row) => row !== id))
    }
  }

  return (
    <tr
      key={row.fireBaseId}
      style={{
        height: 60,
        backgroundColor: '#f5f5f5',
        borderCollapse: 'collapse',
        width: '100%',
        fontSize: '12px'
      }}
    >
      <td style={{ backgroundColor: '#fff' }}>
        <Checkbox
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          color='gray.8'
          size='lg'
          radius={10}
          checked={isSelected}
          onChange={handleSelectedRow}
        />
      </td>
      <td
        style={{
          padding: '20px',
          borderRadius: '10px 0 0 10px'
        }}
      >
        <Avatar src={row.avatar} />
      </td>

      {edit ? (
        <>
          <td>
            <TextInput
              sx={(theme: MantineTheme) => ({
                input: {
                  backgroundColor: theme.colors.dark[3],
                  '&:focus-within': {
                    borderColor: theme.colors.gray
                  }
                }
              })}
            ></TextInput>
          </td>
          <td>
            <TextInput
              sx={(theme: MantineTheme) => ({
                input: {
                  backgroundColor: theme.colors.dark[3],
                  '&:focus-within': {
                    borderColor: theme.colors.gray
                  }
                }
              })}
            ></TextInput>
          </td>
          <td>
            <TextInput
              sx={(theme: MantineTheme) => ({
                input: {
                  backgroundColor: theme.colors.dark[3],
                  '&:focus-within': {
                    borderColor: theme.colors.gray
                  }
                }
              })}
            ></TextInput>
          </td>
          <td>
            <TextInput
              sx={(theme: MantineTheme) => ({
                input: {
                  backgroundColor: theme.colors.dark[3],
                  '&:focus-within': {
                    borderColor: theme.colors.gray
                  }
                }
              })}
            ></TextInput>
          </td>
          <td>
            <Select
              label=''
              nothingFound='No options'
              placeholder={row.gender === 'male' ? 'Nam' : 'Nữ'}
              data={[
                {
                  value: 'female',
                  label: 'Nữ'
                },
                {
                  value: 'male',
                  label: 'Nam'
                }
              ]}
            ></Select>
          </td>
          <td>
            <TextInput
              sx={(theme: MantineTheme) => ({
                input: {
                  backgroundColor: theme.colors.dark[3],
                  '&:focus-within': {
                    borderColor: theme.colors.gray
                  }
                }
              })}
            ></TextInput>
          </td>
          <td style={{ textAlign: 'center' }}>{getMemberShip(MEMBERSHIP.SILVER)}</td>
          <td
            style={{
              padding: '10px',
              textAlign: 'right',
              borderRadius: '0 10px 10px 0'
            }}
          >
            <ActionIcon onClick={() => setEdit(!edit)}>
              <ActiveEditIcon />
            </ActionIcon>
          </td>
        </>
      ) : (
        <>
          <td>
            <Text tt='uppercase' fw='bolder' lh={1.4}>
              {row.firstName}
            </Text>
          </td>
          <td>
            <Text tt='uppercase' fw='bolder' lh={1.4}>
              {row.lastName}
            </Text>
          </td>
          <td>
            <Text>{row.email}</Text>
          </td>
          <td>{row.txtPhone}</td>
          <td>
            <Text>{row.gender === 'male' ? 'Nam' : 'Nữ'}</Text>
          </td>
          <td>{dateFormat ? JSON.parse(dateFormat) : ''}</td>
          <td style={{ textAlign: 'center' }}>{getMemberShip(row.member)}</td>
          <td
            style={{
              padding: '10px',
              textAlign: 'right',
              borderRadius: '0 10px 10px 0'
            }}
          >
            <ActionIcon onClick={() => setEdit(!edit)}>
              <EditIcon />
            </ActionIcon>
          </td>
        </>
      )}
    </tr>
  )
}
