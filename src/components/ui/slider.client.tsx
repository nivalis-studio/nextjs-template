'use client';

import { forwardRef } from 'react';
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import { cn } from '@/utils/classnames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Slider = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'>
      <Range className='absolute h-full bg-primary' />
    </Track>
    <Thumb className='block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' />
  </Root>
));

Slider.displayName = Root.displayName;

export { Slider };
