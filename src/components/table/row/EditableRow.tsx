import { ActiveEditIcon, EditIcon } from '@/assets/icon'
import { UserProps } from '@/types/user'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon, TextInput, Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { Dispatch, SetStateAction } from 'react'
import { useStyles } from './index.style'

interface EditableRowProps {
  row: UserProps
  isSelected: boolean
  handleSelectedRow: () => void
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const EditableRow = ({ row, handleSelectedRow, isSelected, edit, setEdit }: EditableRowProps) => {
  const { classes } = useStyles()

  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        display: 'flex',
        width: '100%',
        fontSize: 12
      }}
      key={row.fireBaseId}
    >
      <li style={{ float: 'left', marginRight: 20, alignItems: 'center', display: 'flex' }}>
        <Checkbox
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          checked={isSelected}
          color='gray.8'
          size='lg'
          radius={10}
          onChange={handleSelectedRow}
        />
      </li>
      <li
        style={{
          width: '100%',
          height: 60,
          alignItems: 'center',
          display: 'flex',
          backgroundColor: isSelected ? '#fff' : '#f5f5f5',
          boxShadow: isSelected ? '2px 2px 10px 1px #ccc' : '',
          borderRadius: 10
        }}
      >
        <ul
          style={{
            textDecoration: 'none',
            listStyleType: 'none',
            padding: 20,
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <li
            style={{
              width: '7%'
            }}
          >
            <Avatar src={row.avatar} />
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <TextInput className={classes.td}></TextInput>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <TextInput className={classes.td}></TextInput>
          </li>
          <li
            style={{
              width: '25%'
            }}
          >
            <TextInput className={classes.td}></TextInput>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <TextInput className={classes.td}></TextInput>
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
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
              rightSection={<IconChevronDown color='gray' size={14} />}
              rightSectionWidth={30}
            />
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <TextInput className={classes.td}></TextInput>
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            {getMemberShip(row.member)}
          </li>
          <li
            style={{
              width: 'auto'
            }}
          >
            <ActionIcon onClick={() => setEdit(!edit)}>{edit ? <ActiveEditIcon /> : <EditIcon />}</ActionIcon>
          </li>
        </ul>
      </li>
    </ul>
  )
}
