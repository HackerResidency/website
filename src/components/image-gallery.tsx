import Image, { type StaticImageData } from 'next/image'
import { useMemo } from 'react'
import { PhotoView } from 'react-photo-view'

import { Card } from '@/components/card'
import { cn } from '@/lib/utils'

export function ImageGallery({
  images,
  className
}: {
  images: { data: StaticImageData; alt: string }[]
  className?: string
}) {
  const maxColumns = useMemo(
    () => (images.length >= 2 ? (images.length > 4 ? 3 : 2) : 1),
    [images.length]
  )

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 max-w-4xl h-full auto-rows-fr',
        maxColumns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3',
        maxColumns === 2 ? 'md:gap-8' : 'md:gap-6',
        className
      )}
    >
      {images.map((image) => (
        <ImageGalleryItem
          key={image.data.src}
          image={image.data}
          alt={image.alt}
        />
      ))}
    </div>
  )
}

function ImageGalleryItem({
  image,
  alt = 'HRG'
}: {
  image: StaticImageData
  alt?: string
}) {
  return (
    <Card className='w-full h-full max-w-full'>
      <PhotoView src={image.src}>
        <Image
          src={image.src}
          alt={alt}
          placeholder='blur'
          width={image.width}
          height={image.height}
          blurDataURL={image.blurDataURL}
          className='rounded-3xl shadow-sm cursor-pointer w-full h-full max-h-[282] object-cover'
        />
      </PhotoView>
    </Card>
  )
}
