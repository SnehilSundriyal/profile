import Image from 'next/image'
import clsx from 'clsx'

const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

export function Photos({ images }) {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, i) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-surface-raised sm:w-72 sm:rounded-2xl',
              rotations[i % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
