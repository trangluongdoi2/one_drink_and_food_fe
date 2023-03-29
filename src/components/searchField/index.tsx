import { forwardRef } from 'react'
import { Group, Text, Select, Button, MantineTheme, Flex, Checkbox, TextInput } from '@mantine/core'
import { SearchIcon } from '@/assets/icon'
import { dataSearch } from '@/constants/search'
import { Link, useNavigate } from 'react-router-dom'

interface CustomItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string
  icon: React.FC<any>
  link: string
  detail: string
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, CustomItemProps>(
  ({ label, icon: Icon, detail, link, ...others }: CustomItemProps, ref) => {
    const navigate = useNavigate()
    const handleClick = () => {
      navigate(link)
    }
    return (
      <div ref={ref} {...others}>
        <Group noWrap onChange={handleClick}>
          <Icon size={20} />

          <div>
            <Text size='sm'>{detail}</Text>
            <Text size='xs' opacity={0.65}>
              {label}
            </Text>
          </div>
        </Group>
      </div>
    )
  }
)

function SearchField({ ...props }) {
  const navigate = useNavigate()

  return (
    <Group spacing={0}>
      <Select
        label=''
        placeholder='Tìm kiếm'
        itemComponent={SelectItem}
        data={dataSearch}
        value={null}
        searchable
        maxDropdownHeight={400}
        nothingFound='Nobody here'
        rightSection={<></>}
        filter={(value, item) =>
          item.label && item.detail
            ? item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
              item.detail.toLowerCase().includes(value.toLowerCase().trim())
            : null
        }
        sx={(theme: MantineTheme) => ({
          input: {
            backgroundColor: theme.colors.dark[0],
            borderRadius: '10px 0 0 10px',
            '&:focus-within': {
              borderColor: theme.colors.gray
            }
          },
          width: 590
        })}
        {...props}
        icon={<SearchIcon />}
        onChange={(link: string) => navigate(link)}
      />
      <Button
        color='dark.2'
        sx={(theme: MantineTheme) => ({
          input: {
            backgroundColor: theme.colors.dark[0]
          },
          borderRadius: '0 10px 10px 0',
          height: 38,
          width: 176
        })}
      >
        <Text size={14} color='gray.8' fw={300}>
          Tìm kiếm
        </Text>
      </Button>
    </Group>
  )
}

export default SearchField
