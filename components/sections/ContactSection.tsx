import { Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import { FIRM } from '@/lib/constants';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-28 md:py-40">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          <h2 className="font-display text-balance text-4xl font-medium leading-[1.08] text-paper md:col-span-7 md:text-5xl lg:text-6xl">
            Let&rsquo;s discuss what matters.
          </h2>

          <div className="md:col-span-5">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-champagne" size={18} />
                <a href={FIRM.mapsUrl} className="link-underline text-paper/80 hover:text-champagne">
                  {FIRM.address.join(', ')}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="shrink-0 text-champagne" size={18} />
                <a href={`mailto:${FIRM.email}`} className="link-underline text-paper/80 hover:text-champagne">
                  {FIRM.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="shrink-0 text-champagne" size={18} />
                <a href={`tel:${FIRM.phone}`} className="link-underline text-paper/80 hover:text-champagne">
                  {FIRM.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle className="shrink-0 text-champagne" size={18} />
                <a href={FIRM.whatsapp} className="link-underline text-paper/80 hover:text-champagne">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Linkedin className="shrink-0 text-champagne" size={18} />
                <a href={FIRM.linkedin} className="link-underline text-paper/80 hover:text-champagne">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
