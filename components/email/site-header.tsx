import Link from 'next/link';

import { siteConfig } from './site';
import { Icons } from '@/components/icon/icons';
import { buttonVariants } from '@/components/plate-ui/button';
import { MainNav } from '@/components/email/main-nav';
import { ModeToggle } from '../theme/mode-toggle';


export function SiteHeader() {
  return (
    <div className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
                <Icons.gitHub className="size-4" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
                <Icons.twitter className="size-5 fill-current" />
                <span className="sr-only">Twitter</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </div>
  );
}
