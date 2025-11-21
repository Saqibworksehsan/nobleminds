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
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: large portrait */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <TeamMember
                    name=""
                    role=""
                    bio="Economist, policy advisor and transformation leader with 15+ years across industry and academia."
                    imgSrc="/founder.png"
                    alt="Dr. Md Arqam V K"
                    large
                  />
                  {/* decorative corner accent */}
                  <div className="hidden md:block absolute -right-6 -bottom-6 w-20 h-20 rounded-lg bg-[rgba(249,115,22,0.08)] transform rotate-12" />
                </div>
              </div>

              {/* Right: content box */}
              <div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-gray-900">Dr. Md Arqam V K</h2>
                  <p className="text-emerald-600 font-medium mb-4">Founder & CEO, Noble Minds</p>

                  <p className="text-gray-700 mb-4">Noble Minds was founded to close a familiar gap: advice without implementation. We combine rigorous research and field experience to design strategies that are actionable, measurable and focused on outcomes.</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-sm text-gray-600">Years experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">12</div>
                      <div className="text-sm text-gray-600">Sectors advised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-600">Projects delivered</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a href="#contact" className="btn-primary">Engage the founder</a>
                    <a href="#contact" className="btn-accent">Request advisory</a>
                  </div>

                  <blockquote className="mt-6 border-l-4 border-emerald-200 pl-4 italic text-gray-700">"We don't create presentations — we create progress. Strategy that is measurable, implementable and sustained."</blockquote>
                </div>
              </div>
            </div>

            {/* Full message content below */}
            <div className="mt-8 bg-white border border-emerald-50 rounded-lg p-8 prose prose-lg text-gray-700">
              <p>Greetings,</p>

              <p>Thank you for visiting Noble Minds. Our mission is simple: translate strategy into delivery. We work with organisations to design clear plans and then stay with them to ensure those plans generate measurable outcomes.</p>

              <p>My academic background in economics and rural development, and my years supporting manufacturing and institutional clients, taught me that great strategy must be practical. At Noble Minds we combine research, policy insight and delivery capability to close the gap between advice and impact.</p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
                <p className="font-semibold">Today, we provide:</p>
                <ul className="mt-3 space-y-2">
                  <li><strong className="text-emerald-600">Strategic guidance</strong> backed by data and industry experience</li>
                  <li><strong className="text-emerald-600">Technology solutions</strong> that simplify and accelerate workflows</li>
                  <li><strong className="text-emerald-600">Compliance services</strong> to reduce business risk</li>
                  <li><strong className="text-emerald-600">Institutional consulting</strong> that shapes ecosystems</li>
                  <li><strong className="text-emerald-600">IP services</strong> that protect innovation</li>
                </ul>
              </div>

              <p>I invite you to explore how Noble Minds can be a catalyst for growth, transformation and long-term impact.</p>

              <p className="pt-4">Warm regards,<br /><strong className="text-gray-900">Dr. Md Arqam V K</strong></p>
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
