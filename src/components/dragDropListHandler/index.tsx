import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Text, createStyles, rem } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import CustomCheckBox from '../checkBox'
import { useEffect, useState } from 'react'
import { TableRowsIcon } from '@/assets/icon'

interface DndListHandleProps {
  data: {
    title: string
    value: string
  }[]
}

const useStyles = createStyles((theme) => ({
  item: {
    // display: 'flex',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    paddingLeft: `calc(${theme.spacing.xl} - ${theme.spacing.md})`, // to offset drag handle
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm
  },

  itemDragging: {
    boxShadow: theme.shadows.sm
  },

  // symbol: {
  //   fontSize: rem(30),
  //   fontWeight: 700,
  //   width: rem(60)
  // },

  dragHandle: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md
  },
  test: {
    display: 'grid !important',
    gridTemplateColumns: 'auto auto',
    // gridTemplateRows:
    flex: '1 1 0'
  }
}))

export function DndListHandle({ data }: DndListHandleProps) {
  const { classes, cx } = useStyles()
  const [state, handlers] = useListState(data)
  const [selectedOption, setSelectedOption] = useState<string[]>([])
  // const selectedOption = (data: string[]) => {
  //   console.log('selectedOption....')
  // }

  // const setSelectedOption = () => {
  //   console.log('setSelectedOption...')
  // }

  const items = state.map((item, index) => (
    <Draggable key={item.title} index={index} draggableId={item.title}>
      {(provided: any, snapshot: any) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            {/* <TableRowsIcon /> */}
            {/* <div>{item.title}</div> */}
            <CustomCheckBox
              title={item.title}
              value={item.value}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
      )}
    </Draggable>
  ))

  useEffect(() => {
    // console.log(handlers, 'handlers....')
  }, [])

  return (
    <DragDropContext
      onDragEnd={({ destination, source }: any) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId='dnd-list' direction='vertical'>
        {(provided: any) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className={classes.test}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
