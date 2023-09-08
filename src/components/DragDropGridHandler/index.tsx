import React from 'react'
import { GridContextProvider, GridDropZone } from 'react-grid-dnd'
import { Box } from '@mantine/core'
import { useStyles } from './index.styles'

export const DragDropGridHandler = ({ configs, children, onChange }: any) => {
  const { totalItems, boxesPerRow, height } = configs
  const { classes } = useStyles()
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })

  return (
    <Box className={classes.container}>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id='items'
          boxesPerRow={boxesPerRow}
          rowHeight={height}
          style={{ height: height * Math.ceil(totalItems / boxesPerRow) }}
        >
          {childrenWithProps}
        </GridDropZone>
      </GridContextProvider>
    </Box>
  )
}

// export const DragDropGridHandler = ({ customStyle, data, component: Component }: any) => {
//   const [items, setItems] = useState<any>(data)
//   const { height } = customStyle
//   const { classes } = useStyles()

//   const onChange = (sourceId: string, sourceIndex: number, targetIndex: number) => {
//     const nextState = swap(items, sourceIndex, targetIndex)
//     setItems(nextState)
//   }

//   return (
//     <Box className={classes.container}>
//       <GridContextProvider onChange={onChange}>
//         <GridDropZone id='items' boxesPerRow={2} rowHeight={height}>
//           {items.map((item: any, index: number) => (
//             <GridItem key={index}>
//               <Component item={item} />
//             </GridItem>
//           ))}
//           {/* {childrenWithProps} */}
//         </GridDropZone>
//       </GridContextProvider>
//     </Box>
//   )
// }
