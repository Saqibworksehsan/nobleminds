export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-slate-200 max-w-3xl mx-auto">Insights and thought leadership from Noble Minds.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-slate-50 rounded-xl p-10 shadow-sm text-gray-800">
            <header className="mb-6">
              <h2 className="text-2xl font-bold">Incubation center advisory & ecosystem development</h2>
              <p className="text-sm text-gray-600 mt-1">Published: Nov 17, 2025 · By Noble Minds</p>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Incubation centres convert ideas into ventures. Noble Minds builds the infrastructure, governance, and networks that make incubation programs effective and investment-ready.
              </p>

              <h3>Core advisory areas</h3>
              <ul>
                <li><strong>Governance & operations:</strong> design selection frameworks, KPI-driven mentorship and clear graduation pathways.</li>
                <li><strong>Funding & partnerships:</strong> create seed-fund structures, secure corporate alliances, and connect founders to investor channels.</li>
                <li><strong>Curriculum & capacity:</strong> run cohort-based programs, technical upskilling and market-ready validation tracks.</li>
              </ul>

              <h3>Building a resilient ecosystem</h3>
              <p>
                We align universities, industry partners, mentors and policy stakeholders to form feedback-driven ecosystems. Measurement and iteration are embedded so incubation programs continuously improve and produce repeatable outcomes.
              </p>

              <p>
                Noble Minds delivers advisory and implementation support — from program design to mentor sourcing and investor introductions — to ensure startups graduate with traction and investors find investable opportunities.
              </p>

              <p className="mt-6">To discuss incubation advising for your institution, contact us at <a href="#contact" className="text-emerald-700 hover:underline">Contact</a> or call +91 80156 21121.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
