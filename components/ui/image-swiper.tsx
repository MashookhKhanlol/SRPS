'use client'

import * as React from 'react'

import { motion, useMotionValue } from 'framer-motion'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

interface ImageSwiperProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
  autoScrollInterval?: number // Auto-scroll interval in milliseconds (default: 3000ms)
}

export function ImageSwiper({ images, className, autoScrollInterval = 3000, ...props }: ImageSwiperProps) {
  const [imgIndex, setImgIndex] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)
  const dragX = useMotionValue(0)

  // Auto-scroll functionality
  React.useEffect(() => {
    if (isHovered || images.length <= 1) return

    const interval = setInterval(() => {
      setImgIndex((prev) => {
        if (prev >= images.length - 1) {
          return 0 // Loop back to first image
        }
        return prev + 1
      })
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [isHovered, images.length, autoScrollInterval])

  const onDragEnd = () => {
    const x = dragX.get()
    if (x <= -10 && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1)
    } else if (x >= 10 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1)
    }
  }

  const goToNext = () => {
    setImgIndex((prev) => {
      if (prev >= images.length - 1) {
        return 0 // Loop back to first image
      }
      return prev + 1
    })
  }

  const goToPrevious = () => {
    setImgIndex((prev) => {
      if (prev <= 0) {
        return images.length - 1 // Loop to last image
      }
      return prev - 1
    })
  }

  return (
    <div
      className={cn(
        'group relative aspect-square h-full w-full overflow-hidden rounded-lg',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="pointer-events-auto h-8 w-8 rounded-full bg-white/80 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4 text-neutral-600" />
          </Button>
        </div>
        
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost" 
            size="icon"
            className="pointer-events-auto h-8 w-8 rounded-full bg-white/80 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4 text-neutral-600" />
          </Button>
        </div>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0
        }}
        dragMomentum={false}
        style={{
          x: dragX
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`
        }}
        onDragEnd={onDragEnd}
        transition={{ damping: 18, stiffness: 90, type: 'spring', duration: 0.2 }}
        className=" flex h-full cursor-grab items-center rounded-[inherit] active:cursor-grabbing">
        {images.map((src, i) => {
          return (
            <motion.div
              key={i}
              className="h-full w-full shrink-0 overflow-hidden bg-neutral-800 object-cover first:rounded-l-[inherit] last:rounded-r-[inherit]">
              <img src={src} className="pointer-events-none h-full w-full object-cover" />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

