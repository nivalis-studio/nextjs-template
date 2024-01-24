'use client';

import {forwardRef} from 'react';
import {Root} from '@radix-ui/react-label';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/classnames';
import type {ComponentPropsWithoutRef, ElementRef} from 'react';
import type {VariantProps} from 'class-variance-authority';

const labelVariants = cva(
	'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

const Label = forwardRef<
	ElementRef<typeof Root>,
	ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants>
>(({className, ...props}, ref) => (
	<Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));

Label.displayName = Root.displayName;

export {Label};
