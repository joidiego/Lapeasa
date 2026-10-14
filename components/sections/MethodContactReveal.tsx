'use client';

import { useState, type FormEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { FIRM } from '@/lib/constants';

const FIELDS = [
  { key: 'nama', label: 'Nama' },
  { key: 'pekerjaan', label: 'Pekerjaan' },
  { key: 'judulKasus', label: 'Judul Kasus' },
  { key: 'tempatTinggal', label: 'Tempat Tinggal' },
  { key: 'noWa', label: 'No Wa/Telp' },
] as const;

type FormState = Record<(typeof FIELDS)[number]['key'], string>;

const EMPTY_FORM: FormState = {
  nama: '',
  pekerjaan: '',
  judulKasus: '',
  tempatTinggal: '',
  noWa: '',
};

export default function MethodContactReveal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      `Nama: ${form.nama}`,
      `Pekerjaan: ${form.pekerjaan}`,
      `Judul Kasus: ${form.judulKasus}`,
      `Tempat Tinggal: ${form.tempatTinggal}`,
      `No Wa/Telp: ${form.noWa}`,
    ].join('\n');

    const subject = `Konsultasi Hukum — ${form.nama || 'Calon Klien'}`;
    const mailtoUrl = `mailto:${FIRM.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    // Keep only digits for the wa.me path (it rejects '+' and spaces).
    const whatsappNumber = FIRM.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`;

    // There's no backend here, so this can't silently fire off the email
    // and WhatsApp message on its own — a browser page can't send email or
    // post to WhatsApp without the visitor's own mail/WhatsApp app in the
    // loop. What it CAN do, and what this does, is open both pre-filled
    // and ready, so the visitor only has to hit send once in each.
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.location.href = mailtoUrl;

    setStatus('sent');
  };

  return (
    <div className="mx-auto max-w-2xl text-center">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group inline-flex flex-col items-center gap-2"
      >
        <span className="font-display text-2xl tracking-[0.04em] text-paper md:text-3xl">
          HUBUNGI KAMI
        </span>
        <span className="h-px w-16 bg-champagne transition-all duration-300 ease-editorial group-hover:w-24" />
        <ChevronDown
          size={18}
          className={`mt-1 text-champagne transition-transform duration-300 ease-editorial ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-editorial ${
          open ? 'mt-10 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          {status === 'sent' ? (
            <div className="rounded-sm border border-champagne/40 px-6 py-10">
              <p className="font-display text-xl text-paper">Terima kasih!</p>
              <p className="mt-2 text-sm text-paper/70">
                Email dan WhatsApp sudah kami siapkan dengan isi formulir Anda — tinggal tekan
                kirim di aplikasi yang baru terbuka.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(EMPTY_FORM);
                  setStatus('idle');
                }}
                className="link-underline mt-5 text-xs tracking-[0.14em] text-champagne"
              >
                KIRIM PESAN LAIN
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {FIELDS.map((field) => (
                <label key={field.key} className="block">
                  <span className="mb-2 block text-xs tracking-[0.12em] text-paper/70">
                    {field.label.toUpperCase()}
                  </span>
                  <input
                    required
                    type={field.key === 'noWa' ? 'tel' : 'text'}
                    value={form[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full border-0 border-b border-paper/20 bg-transparent py-2 text-paper outline-none transition-colors duration-300 ease-editorial focus:border-champagne"
                  />
                </label>
              ))}

              <p className="pt-2 text-xs leading-relaxed text-paper/50">
                Setelah menekan &ldquo;Kirim&rdquo;, aplikasi Email dan WhatsApp Anda akan terbuka
                dengan pesan ini sudah terisi — tinggal konfirmasi kirim di sana.
              </p>

              <button
                type="submit"
                className="w-full bg-champagne py-4 text-xs font-medium tracking-[0.2em] text-ink transition-colors duration-300 ease-editorial hover:bg-champagne-bright md:w-auto md:px-12"
              >
                KIRIM
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
