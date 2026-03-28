import { useState } from 'react';
import { FAQAccordion } from '../components/FAQAccordion';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return (
    <>
      <PageHero
        eyebrow={siteContent.contact.hero.eyebrow}
        title={siteContent.contact.hero.title}
        description={siteContent.contact.hero.description}
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {siteContent.contact.details.map((detail) => (
              <article
                key={detail.title}
                className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">{detail.title}</p>
                <h2 className="mt-3 font-display text-3xl text-espresso">{detail.value}</h2>
                <p className="mt-3 text-sm leading-7 text-espresso/68">{detail.description}</p>
              </article>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-[2.4rem] border border-white/60 bg-white/85 p-8 shadow-soft backdrop-blur-sm sm:p-10"
          >
            <SectionHeading eyebrow="Contact Form" title={siteContent.contact.form.title} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="field"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="field"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="field sm:col-span-2"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={siteContent.forms.inquiryPlaceholder}
                className="field min-h-[180px] resize-none sm:col-span-2"
                required
              />
            </div>
            <button type="submit" className="mt-6 rounded-full bg-espresso px-6 py-4 text-sm font-semibold text-ivory">
              {siteContent.forms.submit}
            </button>
            {submitted ? <p className="mt-4 text-sm text-terracotta">{siteContent.contact.form.success}</p> : null}
          </form>
        </div>
      </section>

      <section className="bg-white/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2.4rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
            <SectionHeading
              eyebrow="Map Placeholder"
              title={siteContent.contact.mapTitle}
              description={siteContent.contact.mapDescription}
            />
            <div className="mt-8 flex min-h-[320px] items-center justify-center rounded-[2rem] border border-dashed border-espresso/20 bg-sand text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">Future Map Embed</p>
                <p className="mt-3 font-display text-3xl text-espresso">Studio, store, or workshop location</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="FAQ" title={siteContent.contact.faqTitle} />
            <div className="mt-8">
              <FAQAccordion items={siteContent.faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
