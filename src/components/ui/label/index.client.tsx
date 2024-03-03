'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { cn } from '@/utils/classnames';
import { labelVariants } from '@/components/ui/label/variants';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));

Label.displayName = Root.displayName;

export { Label };
