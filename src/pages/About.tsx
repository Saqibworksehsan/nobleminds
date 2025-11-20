import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Who We Are
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Noble Minds is a results-first consulting firm led by <strong>Dr. Md Arqam V K</strong>. We blend academic rigor with hands-on delivery to solve complex problems and accelerate institutional change.</p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">We don’t measure success by activity alone — we measure it by outcomes. Our multidisciplinary teams turn strategy into measurable execution, aligning governance, technology and operations to create sustainable impact.</p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 my-12 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Stand Apart</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">Relentless execution focused on measurable KPIs.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">Integrated advisory that closes the gap between plan and performance.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">Long-term partnerships that prioritise value creation over one-off engagements.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">A practical, research-backed approach to institutional and technological transformation.</p>
                </div>
              </div>
            </div>

            <div className="text-center py-12 bg-slate-50 rounded-lg">
              <p className="text-2xl font-semibold text-gray-900 mb-3">We don't just design strategy.</p>
              <p className="text-xl text-emerald-600 font-medium">We build the systems and teams that make it real.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
