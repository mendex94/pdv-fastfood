import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  href: string;
  path: string;
  children: ReactNode;
}

function LinkItem({ href, path, children }: Props) {
  const active = path === href;

  return (
    <Link href={href} passHref>
      <button
        type="button"
        className={
          active
            ? 'bg-black/30 text-white py-1 px-3 rounded-md transition duration-700 text-sm'
            : 'text-white py-1 px-3 text-sm'
        }
      >
        {children}
      </button>
    </Link>
  );
}

export default LinkItem;
