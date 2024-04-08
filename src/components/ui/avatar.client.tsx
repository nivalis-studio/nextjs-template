'use client';

import { forwardRef } from 'react';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { cn } from '@/utils/classnames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Avatar = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative flex size-10 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    {...props}
  />
));

Avatar.displayName = Root.displayName;

const AvatarImage = forwardRef<
  ElementRef<typeof Image>,
  ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn('aspect-square size-full', className)}
    {...props}
  />
));

AvatarImage.displayName = Image.displayName;

const AvatarFallback = forwardRef<
  ElementRef<typeof Fallback>,
  ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      'flex size-full items-center justify-center rounded-full bg-muted',
      className,
    )}
    {...props}
  />
));

AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };