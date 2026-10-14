import { FIRM } from '@/lib/constants';
import Container from '@/components/ui/Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline border-t bg-ink py-14">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo.png" alt={FIRM.name} className="h-14 w-auto" />
            <p className="mt-3 text-sm text-paper/50">{FIRM.address.join(', ')}</p>
          </div>

          <div className="text-sm text-paper/50 md:text-right">
            <p>
              {FIRM.email} &middot; {FIRM.phone}
            </p>
            <p className="mt-2">
              &copy; {year} {FIRM.name}. All rights reserved.
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-paper/35 md:ml-auto">
              This website is attorney advertising. Prior results do not
              guarantee a similar outcome.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
