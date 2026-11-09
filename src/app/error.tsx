'use client';

import { useEffect } from 'react';

type ErrorProps = Readonly<{
  error: Error & { digest?: string };
  unstable_retry: () => void;
}>;

const Page = ({ error, unstable_retry: retry }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full min-h-screen flex-col items-center justify-center gap-6'>
      <title>500 Unexpected Error</title>
      <div className='flex flex-col items-center justify-center px-4 text-center sm:flex-row'>
        <h1 className='text-2xl font-extrabold tracking-tight sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl'>
          500
        </h1>
        <h2 className='text-muted-foreground mt-2 sm:mt-0'>
          An unexpected error occurred.
        </h2>
      </div>
      <button
        className='hover:bg-muted rounded-md border px-4 py-2 text-sm'
        onClick={retry}
        type='button'
      >
        Try again
      </button>
    </div>
  );
};

export default Page;
