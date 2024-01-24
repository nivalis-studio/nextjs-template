'use client';

import {forwardRef} from 'react';
import {Root, Thumb} from '@radix-ui/react-switch';
import {cn} from '@/utils/classnames';
import type {ComponentPropsWithoutRef, ElementRef} from 'react';

const Switch = forwardRef<
	ElementRef<typeof Root>,
	ComponentPropsWithoutRef<typeof Root>
>(({className, ...props}, ref) => (
	<Root
		className={cn(
			'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-gray-950 dark:data-[state=checked]:bg-gray-50 dark:data-[state=unchecked]:bg-gray-800',
			className,
		)}
		{...props}
		ref={ref}
	>
		<Thumb
			className={cn(
				'pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-gray-950',
			)}
		/>
	</Root>
));

Switch.displayName = Root.displayName;

export {Switch};
