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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Noble Minds is a multidisciplinary consulting firm founded by <strong>Dr. Md Arqam V K</strong>, a seasoned professional with expertise spanning economics, manufacturing, public policy, and academic development.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Built on the principles of precision, trust, and impactful execution, Noble Minds integrates business intelligence with real-world industry experience. We combine the strategic depth of global consulting standards with the agility and personalization required by today's evolving enterprises.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 my-12 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Identity as a Firm</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    We operate with excellence and analytical rigor.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    We deliver comprehensive, end-to-end solutions — from policy to strategy, from technology to compliance.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    We value long-term partnerships built on transparency and results.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-emerald-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">
                    Our multidisciplinary teams collaborate seamlessly to bring clarity to complexity.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-12 bg-slate-50 rounded-lg">
              <p className="text-2xl font-semibold text-gray-900 mb-3">
                At Noble Minds, we do not merely advise.
              </p>
              <p className="text-xl text-emerald-600 font-medium">
                We implement. We innovate. We elevate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
