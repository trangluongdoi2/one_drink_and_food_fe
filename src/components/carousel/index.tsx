import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Image } from '@mantine/core'
import { CarouselThumb } from './CarouselThumb'
import { useStyles } from './index.styles'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
  enabled?: boolean
  motionTime?: number
  hasThumbnail?: boolean
}

export const AppCarousel = ({ slides, options, enabled, motionTime = 1000, hasThumbnail = true }: PropType) => {
  const { classes } = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    loop: true
  })

  // const [tempSlides, setTempSlides] = useState<string[]>(slides)

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
    if (enabled) {
      const interval = setInterval(() => {
        const newIndex = selectedIndex + 1
        emblaMainApi && emblaMainApi.scrollTo(newIndex)
        setSelectedIndex(newIndex)
      }, motionTime)
      return () => clearInterval(interval)
    } else {
      emblaMainApi && emblaMainApi.on('reInit', onSelect)
    }
  }, [selectedIndex, enabled, motionTime])

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaMainRef}>
        <div className={classes.embla__container}>
          {slides?.length &&
            slides?.map((slide: string, index: number) => (
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
      {hasThumbnail && (
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
      )}
    </div>
  )
}
