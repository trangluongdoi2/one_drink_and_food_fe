import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Image } from '@mantine/core'
import { CarouselThumb } from './CarouselThumb'
import { useStyles } from './index.styles'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
  canMove?: boolean
  motionDelays?: number
}

export const AppCarousel = ({ slides, options, canMove, motionDelays = 1000 }: PropType) => {
  const { classes } = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    loop: true
  })

  const imageByIndex = (slides: string[], index: number): string => slides[index % slides.length]

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) {
        return
      }
      if (emblaThumbsApi.clickAllowed()) {
        emblaMainApi.scrollTo(index)
      }
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) {
      return
    }
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) {
      return
    }
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  useEffect(() => {
    if (canMove) {
      const interval = setInterval(() => {
        const newIndex = selectedIndex + 1
        emblaMainApi && emblaMainApi.scrollTo(newIndex)
        setSelectedIndex(newIndex)
      }, motionDelays)
      return () => clearInterval(interval)
    } else {
      emblaMainApi && emblaMainApi.on('reInit', onSelect)
    }
  }, [selectedIndex, canMove, motionDelays])

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaMainRef}>
        <div className={classes.embla__container}>
          {slides.map((slide: string, index: number) => (
            <div className={classes.embla__slide} key={index}>
              {slide ? (
                <Image
                  src={imageByIndex(slides, index)}
                  width={225}
                  height={225}
                  classNames={{ image: classes.embla__slide__img }}
                />
              ) : (
                <div className={classes['embla__slide__img--empty']}></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={classes['embla-thumbs']}>
        <div className={classes['embla-thumbs__viewport']} ref={emblaThumbsRef}>
          <div className={classes['embla-thumbs__container']}>
            {slides.map((slide: string, index: number) => (
              <CarouselThumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex % slides.length}
                imgSrc={imageByIndex(slides, index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
