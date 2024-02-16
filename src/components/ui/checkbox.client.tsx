'use client';

import { forwardRef } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/utils/classnames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Checkbox = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'peer size-4 shrink-0 rounded-sm border border-gray-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-gray-900',
      className,
    )}
    {...props}
  >
    <Indicator className={cn('flex items-center justify-center text-current')}>
      <Check className='size-4' />
    </Indicator>
  </Root>
));

Checkbox.displayName = Root.displayName;

export { Checkbox };
