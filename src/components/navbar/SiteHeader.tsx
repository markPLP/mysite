import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { DarkMode } from '../DarkMode';
import Logo from './Logo';
import Socials from './Socials';
import { links } from '@/utils/data';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const sectionIds = links.map(({ id }) => id);

const SiteHeader = () => {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const onHome = pathname === '/';
  const spy = useScrollSpy(sectionIds, onHome);

  // Which nav item is "current": a section on home, or the route we're on.
  const current = onHome
    ? spy
    : pathname.startsWith('/projects')
    ? 'projects'
    : pathname === '/resume'
    ? 'resume'
    : '';

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = (active: boolean) =>
    `relative py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary-text ${
      active
        ? 'text-primary-text after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-primary'
        : 'text-foreground/80'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md print:hidden">
      <div className="align-element flex h-16 items-center gap-4">
        <Logo />

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7">
            {links.map(({ id, href, text }) => (
              <li key={id}>
                <Link
                  to={href}
                  className={linkClass(current === id)}
                  aria-current={current === id ? 'true' : undefined}
                >
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/resume"
                className={linkClass(current === 'resume')}
                aria-current={current === 'resume' ? 'page' : undefined}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <Socials className="hidden sm:flex" />
          <DarkMode />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t bg-background md:hidden"
        >
          <ul className="align-element flex flex-col py-2">
            {[...links, { id: 'resume', href: '/resume', text: 'Resume' }].map(
              ({ id, href, text }) => (
                <li key={id}>
                  <Link
                    to={href}
                    className={`block py-3 text-base font-medium uppercase tracking-wider ${
                      current === id ? 'text-primary-text' : ''
                    }`}
                    aria-current={current === id ? 'true' : undefined}
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
            <li className="pt-2 sm:hidden">
              <Socials />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
