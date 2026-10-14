import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import LegalInsights from '@/components/sections/LegalInsights';
import { CASES, CASES_HEADER } from '@/lib/constants';

export default function CasesSection() {
  return (
    <section id="cases" className="bg-ink py-28 md:py-40">
      <Container>
        <SectionTitle eyebrow={CASES_HEADER.eyebrow}>{CASES_HEADER.title}</SectionTitle>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/50">{CASES_HEADER.note}</p>

        <LegalInsights items={CASES} header={CASES_HEADER} />
      </Container>
    </section>
  );
}
