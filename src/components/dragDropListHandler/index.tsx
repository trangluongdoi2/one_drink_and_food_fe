import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const DragDropListHandler = ({ children, configs, onDragEnd }: any) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })

  return (
    <DragDropContext
      onDragEnd={({ destination, source }: any) => onDragEnd({ from: source.index, to: destination?.index || 0 })}
    >
      <Droppable droppableId='dnd-list' direction='vertical'>
        {(provided: any) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {childrenWithProps}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
