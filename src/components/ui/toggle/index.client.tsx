'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-toggle';
import { cn } from '@/utils/classnames';
import { toggleVariants } from '@/components/ui/toggle/variants';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Toggle = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = Root.displayName;

export { Toggle };

export { toggleVariants } from '@/components/ui/toggle/variants';
