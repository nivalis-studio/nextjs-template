import { cn } from '@/utils/classnames';
import { badgeVariants } from '@/components/ui/badge/variants';
import type { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';

export type BadgeProps = {
  [key: string]: unknown;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge };

export { badgeVariants } from '@/components/ui/badge/variants';
