'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '500 Unexpected Error',
};

const Page = ({ error }: { readonly error: Error }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full min-h-screen items-center justify-center'>
      <div className='flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row'>
        <h1 className='font-extrabold text-2xl tracking-tight sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl'>
          500
        </h1>
        <h2 className='mt-2 text-muted-foreground sm:mt-0'>
          An unexpected error occurred.
        </h2>
      </div>
    </div>
  );
};

export default Page;
