import { TableRowsIcon } from '@/assets/icon'
import { ActionIcon } from '@mantine/core'
import React from 'react'

export const DragDropBlock = ({ children, provided }: any) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })
  return (
    <div {...provided.dragHandleProps}>
      {childrenWithProps ? (
        childrenWithProps
      ) : (
        <ActionIcon size={20}>
          <TableRowsIcon />
        </ActionIcon>
      )}
    </div>
  )
}
