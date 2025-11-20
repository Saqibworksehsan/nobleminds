import TeamMember from "../components/TeamMember";

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership
          </h1>
          <p className="text-slate-200 max-w-3xl mx-auto">
            Driving strategy, building digital futures, and delivering measurable outcomes through partnership and expertise.
          </p>
        </div>
        <div className="absolute left-6 top-8 w-48 h-48 rounded-full bg-[rgba(20,184,166,0.12)] decorative-shape animate-float" />
        <div className="absolute right-6 bottom-10 w-60 h-60 rounded-full bg-[rgba(249,115,22,0.08)] decorative-shape animate-float" />
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Message from the Founder
            </h2>
            <div className="text-center mb-8 border-b border-gray-200 pb-6">
              <p className="text-xl font-semibold text-emerald-600 mt-2">Dr. Md Arqam V K</p>
              <p className="text-gray-600">Founder & CEO, Noble Minds</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg">
                Greetings,
              </p>

              <p>Thank you for visiting Noble Minds.</p>

              <p>Noble Minds was founded to close a familiar gap: advice without implementation. We combine rigorous research and field experience to design strategies that are actionable and measurable.</p>

              <p>My background in economics and rural development, alongside years supporting manufacturing and institutional clients, shaped a leadership philosophy focused on <strong className="text-emerald-700">clarity, disciplined execution, and integrity</strong>.</p>

              <p>We partner with organisations to translate strategy into delivery — not reports, but sustained outcomes.</p>

              <div className="bg-white border border-emerald-200 rounded-lg p-6 my-6">
                <p className="font-semibold text-gray-900 mb-3">Today, we provide:</p>
                <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      Strategic guidance backed by data and industry experience
                    </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Technology solutions that simplify and accelerate workflows
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Compliance services that reduce business risk
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    Institutional consulting that shapes ecosystems
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    IP services that protect innovation
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-6">
                <p className="font-semibold text-gray-900">
                  At Noble Minds, we don't just create presentations — we create progress.
                </p>
                <p className="font-semibold text-gray-900">
                  We don't just deliver reports — we deliver results.
                </p>
                <p className="font-semibold text-gray-900">
                  We don't just advise — we partner.
                </p>
              </div>

              <p>I invite you to explore how Noble Minds can be a catalyst for growth, transformation and long-term impact.</p>

              <p className="pt-4">
                Warm regards,<br />
                <strong className="text-gray-900">Dr. Md Arqam V K</strong><br />
                <span className="text-sm text-gray-600">Founder & CEO, Noble Minds</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team section - enhanced with cards */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Team: Leaders in Strategy, Technology & Transformation
              </h2>
              <p className="text-gray-700 max-w-xl">
                At Noble Minds, our success is powered by a dynamic and highly skilled team that brings expertise across business consulting, technology solutions, compliance, and academic collaboration. With a diverse mix of specialists, we deliver end-to-end support to organizations across industries and growth stages.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <h3 className="sr-only">Our Core Team Includes</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong className="text-emerald-600">Strategy & Business Consultants</strong> – Experts in policy advisory, funding strategies, and market expansion for SMEs and startups.</li>
                <li><strong className="text-emerald-600">Finance & Compliance Professionals</strong> – Skilled in accounting, regulatory compliance, tax filing, and MSME incentives.</li>
                <li><strong className="text-emerald-600">Technology & Digital Transformation Experts</strong> – Full-stack Developers, Data Scientists, AI Engineers, and Automation Specialists.</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li><strong className="text-emerald-600">Intellectual Property and Legal Advisors</strong> – Focused on trademark, patent, and IP portfolio management.</li>
                <li><strong className="text-emerald-600">Industry Specialists</strong> – Deep knowledge across leather, automotive, agritech, greentech, FMCG and more.</li>
                <li><strong className="text-emerald-600">Academic & Incubation Consultants</strong> – Curriculum and incubation support for innovation ecosystems.</li>
                <li><strong className="text-emerald-600">Project Managers & Client Coordinators</strong> – Delivery-focused project leads and client-facing coordinators.</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="max-w-sm w-full">
                <TeamMember
                  name="Dr. Md Arqam V K"
                  role="Founder & CEO"
                  bio="Economist, policy advisor and transformation leader with 15+ years across industry and academia."
                  imgSrc="/founder.png"
                  alt="Dr. Md Arqam V K"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700">Each member of our team plays a vital role in translating vision into value. Together, we bring clarity, innovation, and impact to every project we undertake — helping our clients build the future with confidence.</p>
              <div className="mt-6">
                <a href="#contact" className="btn-primary">Work with our team</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
