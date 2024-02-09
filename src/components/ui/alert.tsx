import {forwardRef} from 'react';
import {cva} from 'class-variance-authority';
import {cn} from '@/utils/classnames';
import type {HTMLAttributes} from 'react';
import type {VariantProps} from 'class-variance-authority';

const alertVariants = cva(
	'relative w-full rounded-lg border border-gray-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 dark:border-gray-800 dark:[&>svg]:text-gray-50',
	{
		variants: {
			variant: {
				default: 'bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50',
				destructive:
					'border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

const Alert = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({className, variant, ...props}, ref) => (
	<div
		ref={ref}
		role='alert'
		className={cn(alertVariants({variant}), className)}
		{...props}
	/>
));

Alert.displayName = 'Alert';

const AlertTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => (
	// eslint-disable-next-line jsx-a11y/heading-has-content
	<h5
		ref={ref}
		className={cn('mb-1 font-medium leading-none tracking-tight', className)}
		{...props}
	/>
));

AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => (
	<div
		ref={ref}
		className={cn('text-sm [&_p]:leading-relaxed', className)}
		{...props}
	/>
));

AlertDescription.displayName = 'AlertDescription';

export {Alert, AlertTitle, AlertDescription};