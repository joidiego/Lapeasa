import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { CASES } from '@/lib/constants';

export default function CasesSection() {
  return (
    <section id="cases" className="bg-ink py-28 md:py-40">
      <Container>
        <SectionTitle eyebrow="REPRESENTATIVE MATTERS">
          A portfolio shaped by difficult problems.
        </SectionTitle>

        <p className="mt-6 max-w-xl text-sm text-paper/50">
          Details below are illustrative; specifics are withheld in keeping with
          client confidentiality.
        </p>

        <div className="mt-16 grid gap-0 md:grid-cols-2 md:gap-x-16">
          {CASES.map((item) => (
            <div key={item.number} className="hairline border-t px-6 py-10 first:md:border-t last:md:border-b md:px-8">
              <p className="font-display text-sm text-champagne">CASE {item.number}</p>
              <h3 className="mt-3 font-display text-2xl text-paper md:text-3xl">{item.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
