'use client';

import { forwardRef } from 'react';
import { Indicator, Root } from '@radix-ui/react-progress';
import { cn } from '@/utils/classnames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Progress = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, value, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className,
    )}
    {...props}
  >
    <Indicator
      className='size-full flex-1 bg-primary transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
));

Progress.displayName = Root.displayName;

export { Progress };
