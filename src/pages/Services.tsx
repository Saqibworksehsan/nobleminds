import { Briefcase, Code, FileCheck, Building } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white mb-4">
                <Briefcase size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Business Advisory
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Business strategy and growth consulting
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Policy and scheme advisory for SMEs & MSMEs
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Taxation, GST, and IT compliance
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Financial structuring, funding access & documentation
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Reimbursement, incentives, and subsidy facilitation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-4">
                <Code size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Technology & Digital Transformation
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Professional website design & development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  AI, machine learning & automation solutions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Business intelligence dashboards and data analytics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Digital system integration & workflow optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white mb-4">
                <FileCheck size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property & Legal Support
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Trademark registration & brand protection
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Patent drafting, filing, and documentation support
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  IP strategy advisory for startups and technology ventures
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-700 text-white mb-4">
                <Building size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Institutional & Academic Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-slate-700 mr-2">•</span>
                  Incubation center advisory & ecosystem development
                </li>
                <li className="flex items-start">
                  <span className="text-slate-700 mr-2">•</span>
                  Curriculum development and academic innovation
                </li>
                <li className="flex items-start">
                  <span className="text-slate-700 mr-2">•</span>
                  Faculty development, expert talks & capacity-building sessions
                </li>
                <li className="flex items-start">
                  <span className="text-slate-700 mr-2">•</span>
                  University-industry partnership frameworks
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Sector-Specific Consulting</h2>
            <p className="mb-4">We support diverse industries including:</p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                Leather & Footwear Manufacturing
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                Automotive & Engineering
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                Talcum Powder & Personal Care
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                Greentech, Renewable Energy & Sustainability
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                Agritech, Rural Enterprises & Agripreneurs
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                AI, SaaS & Deep Tech Startups
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                NGOs, Foundations & Impact-driven Organizations
              </div>
              <div className="flex items-start">
                <span className="text-emerald-200 mr-2">•</span>
                Solopreneurs & Digital-first Creators
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
