'use client';

import { createContext, forwardRef, useContext, useMemo } from 'react';
import { Item, Root } from '@radix-ui/react-toggle-group';
import { toggleVariants } from '@/components/ui/toggle/index.client';
import { cn } from '@/utils/classnames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
});

const ToggleGroup = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => {
  const contextValue = useMemo(() => ({ variant, size }), [variant, size]);

  return (
    <Root
      ref={ref}
      className={cn('flex items-center justify-center gap-1', className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={contextValue}>
        {children}
      </ToggleGroupContext.Provider>
    </Root>
  );
});

ToggleGroup.displayName = Root.displayName;

const ToggleGroupItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant ?? variant,
          size: context.size ?? size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Item>
  );
});

ToggleGroupItem.displayName = Item.displayName;

export { ToggleGroup, ToggleGroupItem };
