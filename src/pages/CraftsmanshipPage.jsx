import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { SectionHeading } from '../components/SectionHeading';
import { siteContent } from '../constants/content';

export function CraftsmanshipPage() {
  return (
    <>
      <PageHero
        eyebrow={siteContent.craftsmanship.hero.eyebrow}
        title={siteContent.craftsmanship.hero.title}
        description={siteContent.craftsmanship.hero.description}
        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Workshop Timeline"
            title={siteContent.craftsmanship.timelineTitle}
            description="A closer look at the tactile steps behind every handcrafted Vanmaya piece."
          />
          <div className="mt-10">
            <ProcessTimeline steps={siteContent.craftsmanshipSteps} />
          </div>
        </div>
      </section>

      <section className="bg-white/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/70 p-4 shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
              alt="Furniture finishing studio"
              className="h-full min-h-[420px] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="rounded-[2.4rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:p-10">
            <SectionHeading
              eyebrow="Artisan Detail"
              title={siteContent.craftsmanship.artisanFeature.title}
              description={siteContent.craftsmanship.artisanFeature.description}
            />
            <p className="mt-6 text-base leading-8 text-espresso/70">
              Every stage, from timber assessment to final polish, is measured by feel as much as by dimension. That
              sensitivity creates the softness in edge transitions, the richness in finish, and the quiet confidence in
              the final form.
            </p>
            <Link
              to="/custom-furniture"
              className="mt-8 inline-flex rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-ivory"
            >
              {siteContent.buttons.talkToCraftsman}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
