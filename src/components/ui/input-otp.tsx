'use client';

import { forwardRef, useContext } from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import { cn } from '@/utils/classnames';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const InputOTP = forwardRef<
  ElementRef<typeof OTPInput>,
  ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    className={cn('disabled:cursor-not-allowed', className)}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName,
    )}
    {...props}
  />
));

InputOTP.displayName = 'InputOTP';

const InputOTPGroup = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));

InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index];

  if (!slot) return null;
  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret ? (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className='animate-caret-blink h-4 w-px bg-foreground duration-1000' />
        </div>
      ) : null}
    </div>
  );
});

InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <Dot />
  </div>
));

InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
