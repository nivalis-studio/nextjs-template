'use client';

import {forwardRef} from 'react';
import {
	Content,
	Group,
	Icon,
	Item,
	ItemIndicator,
	ItemText,
	Label,
	Portal,
	Root,
	ScrollDownButton,
	ScrollUpButton,
	Separator,
	Trigger,
	Value,
	Viewport,
} from '@radix-ui/react-select';
import {Check, ChevronDown, ChevronUp} from 'lucide-react';
import {cn} from '@/utils/classnames';
import type {ComponentPropsWithoutRef, ElementRef} from 'react';

const Select = Root;
const SelectGroup = Group;
const SelectValue = Value;

const SelectTrigger = forwardRef<
	ElementRef<typeof Trigger>,
	ComponentPropsWithoutRef<typeof Trigger>
>(({className, children, ...props}, ref) => (
	<Trigger
		ref={ref}
		className={cn(
			'flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus:ring-gray-300 [&>span]:line-clamp-1',
			className,
		)}
		{...props}
	>
		{children}
		<Icon asChild>
			<ChevronDown className='size-4 opacity-50' />
		</Icon>
	</Trigger>
));

SelectTrigger.displayName = Trigger.displayName;

const SelectScrollUpButton = forwardRef<
	ElementRef<typeof ScrollUpButton>,
	ComponentPropsWithoutRef<typeof ScrollUpButton>
>(({className, ...props}, ref) => (
	<ScrollUpButton
		ref={ref}
		className={cn(
			'flex cursor-default items-center justify-center py-1',
			className,
		)}
		{...props}
	>
		<ChevronUp className='size-4' />
	</ScrollUpButton>
));

SelectScrollUpButton.displayName = ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
	ElementRef<typeof ScrollDownButton>,
	ComponentPropsWithoutRef<typeof ScrollDownButton>
>(({className, ...props}, ref) => (
	<ScrollDownButton
		ref={ref}
		className={cn(
			'flex cursor-default items-center justify-center py-1',
			className,
		)}
		{...props}
	>
		<ChevronDown className='size-4' />
	</ScrollDownButton>
));

SelectScrollDownButton.displayName = ScrollDownButton.displayName;

const SelectContent = forwardRef<
	ElementRef<typeof Content>,
	ComponentPropsWithoutRef<typeof Content>
>(({className, children, position = 'popper', ...props}, ref) => (
	<Portal>
		<Content
			ref={ref}
			position={position}
			className={cn(
				'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50',
				position === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				className,
			)}
			{...props}
		>
			<SelectScrollUpButton />
			<Viewport
				className={cn(
					'p-1',
					position === 'popper' &&
						'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
				)}
			>
				{children}
			</Viewport>
			<SelectScrollDownButton />
		</Content>
	</Portal>
));

SelectContent.displayName = Content.displayName;

const SelectLabel = forwardRef<
	ElementRef<typeof Label>,
	ComponentPropsWithoutRef<typeof Label>
>(({className, ...props}, ref) => (
	<Label
		ref={ref}
		className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
		{...props}
	/>
));

SelectLabel.displayName = Label.displayName;

const SelectItem = forwardRef<
	ElementRef<typeof Item>,
	ComponentPropsWithoutRef<typeof Item>
>(({className, children, ...props}, ref) => (
	<Item
		ref={ref}
		className={cn(
			'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50',
			className,
		)}
		{...props}
	>
		<span className='absolute left-2 flex size-3.5 items-center justify-center'>
			<ItemIndicator>
				<Check className='size-4' />
			</ItemIndicator>
		</span>

		<ItemText>{children}</ItemText>
	</Item>
));

SelectItem.displayName = Item.displayName;

const SelectSeparator = forwardRef<
	ElementRef<typeof Separator>,
	ComponentPropsWithoutRef<typeof Separator>
>(({className, ...props}, ref) => (
	<Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800', className)}
		{...props}
	/>
));

SelectSeparator.displayName = Separator.displayName;

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
};
