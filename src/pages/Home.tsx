import { Target, TrendingUp, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-up">Noble Minds — Strategy, Technology, Results.</h1>
          <p className="text-xl md:text-2xl mb-6 text-slate-200 max-w-3xl mx-auto animate-fade-up">We turn ambition into measurable progress — designing strategy, building resilient systems, and delivering outcomes that move organisations forward.</p>

          <div className="flex items-center justify-center gap-4 mt-6 animate-fade-up">
            <a href="#contact" className="btn-accent">Work with us</a>
            <a href="#services" className="btn-primary">Our Services</a>
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="absolute -left-16 -top-8 w-56 h-56 rounded-full bg-emerald-400 opacity-40 decorative-shape animate-float" />
        <div className="absolute -right-20 -bottom-8 w-72 h-72 rounded-full bg-[rgba(249,115,22,0.16)] opacity-60 decorative-shape animate-float" />
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed mb-12 animate-fade-up">We partner with leaders, founders, and institutions to translate ambition into execution — removing friction, aligning teams, and delivering programs that scale impact.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 animate-fade-up transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Relentless Integrity</h3>
              <p className="text-gray-600">We act with uncompromising ethics and deliver dependable outcomes.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-white border border-orange-100 animate-fade-up transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange-500 text-white mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Strategic Intelligence</h3>
              <p className="text-gray-600">Insight-led plans that unlock growth and protect value.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100 animate-fade-up transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Bold Innovation</h3>
              <p className="text-gray-600">Practical digital systems that move your organisation forward.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-50 to-white border border-slate-200 animate-fade-up transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700 text-white mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Enduring Partnership</h3>
              <p className="text-gray-600">We stay with you until outcomes are achieved and sustained.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Solutions That Deliver Measurable Impact</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">Our practice blends rigorous strategy, technology delivery and disciplined execution to generate measurable improvements in growth, efficiency, and compliance.</p>
        </div>
      </section>
    </div>
  );
}
