import { Box, Image } from '@mantine/core'
import { useStyles } from './index.styles'

type PropType = {
  selected: boolean
  imgSrc: string
  onClick: () => void
}

export const CarouselThumb = (props: PropType) => {
  const { selected, imgSrc, onClick } = props
  const { classes } = useStyles()
  const newLocal = 'embla-thumbs__slide__img'
  return (
    <Box onClick={onClick} className={classes['embla-thumbs__slide']}>
      {imgSrc ? (
        <Image
          // className={
          //   selected
          //     ? `${classes['embla-thumbs__slide__img']} ${classes['embla-thumbs__slide__img--selected']}`
          //     : classes['embla-thumbs__slide__img']
          // }
          src={imgSrc}
          width={66}
          height={66}
          classNames={{image: selected
              ? `${classes[newLocal]} ${classes['embla-thumbs__slide__img--selected']}`
              : classes['embla-thumbs__slide__img']
          }}
        />
      ) : (
        <div
          className={
            selected
              ? `${classes['embla-thumbs__slide__img--empty']} ${classes['embla-thumbs__slide__img--emptySelected']}`
              : classes['embla-thumbs__slide__img--empty']
          }
        ></div>
      )}
    </Box>
  )
}
