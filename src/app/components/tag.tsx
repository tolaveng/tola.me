import Link from 'next/link';
import React from 'react';

export default function Tag({ text }: { text: string }) {
  return (
    <Link href={`/tag/${text}`} className='p-1 ps-4 pe-4 m-2 border border-cyan-700 rounded-full text-xs hover:bg-cyan-700'>
      {text}
    </Link>
  );
}
