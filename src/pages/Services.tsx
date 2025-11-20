export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" fillOpacity="0.02" d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,208C672,203,768,181,864,154.7C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="max-w-3xl mx-auto text-slate-200">We combine sector knowledge, implementation capability, and digital expertise to deliver measurable outcomes.</p>
        </div>
        {/* Decorative background orbs */}
        <div className="absolute -left-24 -top-12 w-64 h-64 rounded-full bg-[rgba(16,185,129,0.14)] decorative-shape animate-float" />
        <div className="absolute right-12 bottom-8 w-72 h-72 rounded-full bg-[rgba(249,115,22,0.12)] decorative-shape animate-float" />
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="rounded-xl overflow-hidden shadow-sm transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d8b2fc0a0af1a3d1e3f6a2d9b6b6a2f" alt="Business advisory" className="w-full h-44 object-cover" />
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Business Advisory</h3>
                <p className="text-gray-700 mb-4">Clear growth strategy, funding access and financial structuring that enables sustainable scale.</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Market entry & growth strategies</li>
                  <li>Policy advisory and scheme alignment</li>
                  <li>Tax, compliance and financial structuring</li>
                </ul>
                <div className="flex items-center justify-between">
                  <a href="#contact" className="text-emerald-600 font-medium hover:underline">Talk to a strategist</a>
                  <a href="#contact" className="btn-primary">Engage us</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl overflow-hidden shadow-sm transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Technology" className="w-full h-44 object-cover" />
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Technology & Digital Transformation</h3>
                <p className="text-gray-700 mb-4">Engineering resilient products, automating workflows, and applying AI to unlock operational advantage.</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Product engineering & platform delivery</li>
                  <li>AI/ML, automation and intelligent systems</li>
                  <li>Data strategy, analytics & BI</li>
                </ul>
                <div className="flex items-center justify-end">
                  <a href="#contact" className="btn-primary">Start a project</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl overflow-hidden shadow-sm transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d2a5b6c7d9e4f1b2c3d4e5f6a7b8c9d" alt="IP & Legal" className="w-full h-44 object-cover" />
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property & Legal Support</h3>
                <p className="text-gray-700 mb-4">Protect and commercialize your innovations with practical IP strategy and counsel.</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Trademark registration & brand protection</li>
                  <li>Patent drafting & filing support</li>
                  <li>IP strategy and commercialization</li>
                </ul>
                <div className="flex items-center justify-end">
                  <a href="#contact" className="btn-primary">Talk to counsel</a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl overflow-hidden shadow-sm transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f2a1b4c5d6e7f8a9b0c1d2e3f4a5b6c" alt="Institutional" className="w-full h-44 object-cover" />
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Institutional & Academic Services</h3>
                <p className="text-gray-700 mb-4">Incubation advisory, curriculum design, and university–industry collaborations that build sustainable innovation ecosystems.</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Incubation centre advisory & ecosystem development</li>
                  <li>Curriculum development and academic innovation</li>
                  <li>Faculty development & capacity-building</li>
                </ul>
                <div className="flex items-center justify-end">
                  <a href="#contact" className="btn-primary">Request advisory</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-8">
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
