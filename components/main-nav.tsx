import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/mode-toggle';

export function MainNav() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="flex justify-between w-full">
          <nav className="text-sm flex items-center font-medium space-x-6">
            <span className="flex items-center gap-2">
              <Icons.logo />
              <p className="text-lg font-bold">Contentlayer</p>
            </span>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
          <div className="flex items-center gap-1">
            <Link href="https://github.com/vagnermaltauro" target="_blank">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
              </div>
            </Link>
            <Link href="https://twitter.com/vagnermaltauro" target="_blank">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.twitterX className="h-5 w-5" />
              </div>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
