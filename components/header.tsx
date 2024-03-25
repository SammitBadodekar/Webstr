
import { Command } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 w-full border-b">
      <Link href="/" className="flex items-center space-x-2">
        <Command className="h-8 w-8" />
        <h2 className="text-xl font-semibold">Drag-cn</h2>
      </Link>
      {/* <ThemeToggle /> */}
    </nav>
  );
};
