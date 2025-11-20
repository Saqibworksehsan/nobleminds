import { Layers, Zap, Lightbulb, Award, Scale } from 'lucide-react';

export default function WhyNobleMinds() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Noble Minds
          </h1>
        </div>
        <div className="absolute -left-12 -top-6 w-56 h-56 rounded-full bg-[rgba(16,185,129,0.12)] decorative-shape animate-float" />
        <div className="absolute right-8 bottom-6 w-48 h-48 rounded-full bg-[rgba(249,115,22,0.08)] decorative-shape animate-float" />
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Distinctive Advantage</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white mb-4">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Holistic Expertise</h3>
              <p className="text-gray-700">We integrate business, technology, policy and academia to craft practical, multi-dimensional solutions.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Execution-Driven Consulting</h3>
              <p className="text-gray-700">We move beyond recommendations — we implement, embed and measure sustained change.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white mb-4">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Future-Ready Mindset</h3>
              <p className="text-gray-700">From AI adoption to IP strategy, we prepare organisations to compete and lead in tomorrow’s markets.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-700 text-white mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ethics at the Core
              </h3>
              <p className="text-gray-700">
                Our values guide every engagement — transparency, professionalism, accountability, and trust.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-600 text-white mb-4">
                <Scale size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Tailored for Every Scale
              </h3>
              <p className="text-gray-700">
                Whether you are an enterprise expanding operations or a founder building from scratch, we offer scalable, cost-effective, and high-impact solutions.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building the Future, One Transformation at a Time</h2>
            <p className="text-lg text-emerald-100 max-w-4xl mx-auto leading-relaxed">We combine insight with action and strategy with delivery — supporting organisations that choose growth with purpose and rigor.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
