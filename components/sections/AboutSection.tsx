import Container from '@/components/ui/Container';

export default function AboutSection() {
  return (
    <section id="about" className="bg-ink py-28 md:py-40">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <p className="text-xs tracking-[0.28em] text-champagne md:col-span-3">TENTANG KAMI</p>

          <div className="md:col-span-9">
            <h2 className="font-display text-balance text-4xl font-medium leading-[1.1] text-paper md:text-5xl lg:text-6xl">
              LAPEASA LOW OFFICE & Partners
            </h2>

            <div className="mt-10 grid gap-8 text-paper/75 md:grid-cols-2 md:gap-14">
              <p className="text-lg leading-relaxed">
                Selamat datang di LAPEASA LAW OFFICE & Partners. Kami adalah firma hukum yang lahir dari dedikasi panjang untuk memberikan keadilan dan kepastian hukum bagi klien kami. Dengan jam terbang yang telah teruji melewati berbagai dinamika perkara dan perubahan zaman, kami menghadirkan solusi hukum yang tidak hanya cerdas secara regulasi, tetapi juga strategis secara bisnis.
              </p>
              <p className="text-lg leading-relaxed">
                Didukung oleh tim pengacara senior yang berpengalaman luas di bidang litigasi, korporasi, dan hukum perdata, kami berkomitmen untuk menjadi perisai tangguh bagi kepentingan Anda. Bersama kami, setiap tantangan hukum akan kami hadapi dengan ketelitian, integritas, dan strategi yang memenangkan.
              </p>
            </div>
          </div>
        </div>

        <div className="hairline mt-24 h-px w-full" aria-hidden />
      </Container>
    </section>
  );
}
