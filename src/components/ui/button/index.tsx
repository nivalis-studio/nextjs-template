import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/classnames';
import { buttonVariants } from '@/components/ui/button/variants';
import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

export type ButtonProps = {
  readonly asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
