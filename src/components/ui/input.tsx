import {forwardRef} from 'react';
import {cn} from '@/utils/classnames';
import type {InputHTMLAttributes} from 'react';

export type InputProps = {
	[key: string]: unknown;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({className, type, ...props}, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(
					'flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300',
					className,
				)}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';

export {Input};