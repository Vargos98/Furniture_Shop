import { useLocation } from 'react-router-dom';
import { CustomizationForm } from '../components/CustomizationForm';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';

export function CustomFurniturePage() {
  const { search } = useLocation();
  const prefilledType = new URLSearchParams(search).get('product') ?? '';

  return (
    <>
      <PageHero
        eyebrow={siteContent.customFurniture.hero.eyebrow}
        title={siteContent.customFurniture.hero.title}
        description={siteContent.customFurniture.hero.description}
        image="https://images.unsplash.com/photo-1505693416388-c7960c4434f5?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2.4rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
            <SectionHeading
              eyebrow="Customization Journey"
              title={siteContent.customFurniture.introTitle}
              description={siteContent.customFurniture.introText}
            />
            <div className="mt-8 space-y-4">
              {siteContent.customFurniture.steps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] bg-sand px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">Step 0{index + 1}</p>
                  <h3 className="mt-3 font-display text-3xl text-espresso">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-espresso/68">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <CustomizationForm prefilledType={prefilledType} />
        </div>
      </section>
    </>
  );
}
