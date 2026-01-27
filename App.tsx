
import React from 'react';
import { FocusArea } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import GridList from './components/GridList';
import Footer from './components/Footer';
import SystemsAssistant from './components/SystemsAssistant';

const App: React.FC = () => {
  const programmeAreas: FocusArea[] = [
    {
      title: "Early Childhood Development & Learning",
      description: "Strengthening early learning, caregiver engagement, and school readiness through creative, culturally responsive education models."
    },
    {
      title: "Youth Development & Creative Learning",
      description: "Supporting youth identity, leadership, creativity, and digital skills through participatory learning and cultural expression."
    },
    {
      title: "Women & Adolescent Girls Empowerment",
      description: "Advancing agency, education, leadership, and wellbeing through gender-responsive programming and mentorship."
    },
    {
      title: "Community Health, Wellbeing & Care Systems",
      description: "Promoting health literacy, psychosocial wellbeing, and community-based care through education and support initiatives."
    },
    {
      title: "Environmental Stewardship & Sustainable Futures",
      description: "Cultivating environmental awareness, conservation practice, and youth climate engagement through creative and community-led action."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Who We Are */}
        <Section id="who-we-are" title="Who We Are" className="bg-neutral-50">
          <div className="max-w-3xl space-y-8">
            <p className="text-xl leading-relaxed text-neutral-800">
              Zithulele Development Collective (ZDC) is a South African non-profit organisation advancing <strong className="font-semibold">community-centred development</strong> across education, youth and women empowerment, creative learning, environmental stewardship, and social wellbeing.
            </p>
            <p className="text-lg leading-relaxed text-neutral-600">
              We work at the intersection of <strong className="text-black">research, culture, and lived experience</strong>, translating knowledge into practical, locally grounded programmes that strengthen opportunity, dignity, and long-term resilience.
            </p>
            <p className="text-lg leading-relaxed text-neutral-600">
              ZDC is built to address complexity through integrated, ethical, and collaborative approaches.
            </p>
          </div>
        </Section>

        {/* What We Do */}
        <Section id="what-we-do" title="What We Do">
          <div className="mb-12">
            <p className="text-lg text-neutral-700">
              Our work is structured around five interconnected programme areas:
            </p>
          </div>
          <GridList items={programmeAreas} />
        </Section>

        {/* How We Work */}
        <Section id="how-we-work" title="How We Work" className="bg-neutral-50">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700">
                ZDC operates through a <strong className="font-semibold text-black">community-led and ethically grounded model</strong> built on:
              </p>
              <ul className="space-y-4">
                {[
                  "Participatory programme design",
                  "Primary data and lived experience",
                  "Ethical engagement and accountability",
                  "Interdisciplinary collaboration",
                  "Continuous learning and adaptation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full shrink-0"></div>
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center border border-neutral-200 bg-white p-8">
              <p className="text-neutral-500 leading-relaxed text-sm italic">
                This approach ensures that our programmes remain relevant, responsive, and locally owned.
              </p>
            </div>
          </div>
        </Section>

        {/* Our Vision */}
        <Section id="vision" title="Our Vision" className="bg-black text-white">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {[
                "Thriving children.",
                "Empowered women and girls.",
                "Creative youth.",
                "Healthy communities.",
                "A regenerative relationship with nature."
              ].map((v, i) => (
                <div key={i} className="text-2xl md:text-3xl font-light tracking-tight border-b border-neutral-800 pb-4">
                  {v}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center p-8 bg-neutral-900">
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500">
                Human & Ecological Flourishing
              </p>
            </div>
          </div>
        </Section>

        {/* Founder & Executive Director */}
        <Section id="founder" title="Founder & Lead" className="border-t border-neutral-200">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-8 tracking-tight">Amahle Sozoyi</h3>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Amahle Sozoyi is a researcher and development practitioner specialising in community-based programme design, primary data generation, and ethical development practice. She leads Zithulele Development Collective’s applied work across education, youth and women empowerment, and community-centred social development.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a href="https://linkedin.com/in/amahle-sozoyi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-black font-bold group">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                <span className="border-b border-black text-sm transition-all group-hover:pb-0.5">Amahle (Amakha-amahle) Sozoyi</span>
              </a>
            </div>
          </div>
        </Section>

        {/* Systems Assistant */}
        <SystemsAssistant />
      </main>

      <Footer />
    </div>
  );
};

export default App;
