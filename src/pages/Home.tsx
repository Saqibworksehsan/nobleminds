import { Target, TrendingUp, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Noble Minds
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-emerald-100">
            Shaping Strategy. Enabling Transformation. Empowering Growth.
          </p>
          <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Noble Minds is a high-impact consulting and solutions firm built for organizations that aspire to grow with clarity, innovate with confidence, and operate with excellence. We bring together strategic advisory, technology integration, compliance expertise, and institutional consulting under one unified ecosystem.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 max-w-5xl mx-auto text-center leading-relaxed mb-12">
            Whether you are a fast-scaling startup, a forward-looking MSME, an established enterprise, or an academic institution building the future of learning and innovation — Noble Minds provides the insight, structure, and execution needed to thrive in an increasingly competitive and digital-first world.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Integrity</h3>
              <p className="text-gray-600">
                Built on trust and ethical excellence
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-white border border-orange-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Intelligence</h3>
              <p className="text-gray-600">
                Data-driven insights and strategic depth
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Future-ready solutions that transform
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700 text-white mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Partnership</h3>
              <p className="text-gray-600">
                Long-term collaboration and success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Solutions That Accelerate Long-Term Success
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our approach is rooted in integrity, intelligence, and innovation — delivering solutions that not only solve challenges but accelerate long-term success.
          </p>
        </div>
      </section>
    </div>
  );
}
