import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section id="contact" className="bg-gradient-to-br from-slate-900 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-slate-200 max-w-3xl mx-auto">Connect with Noble Minds — start a conversation that leads to decisive progress.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-xl p-10 shadow-sm text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Reach Us</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-emerald-100 text-emerald-700">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+918015621121" className="text-lg font-medium text-emerald-700 hover:underline">+91 80156 21121</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-emerald-100 text-emerald-700">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:info@nobleminds.in.net" className="text-lg font-medium text-emerald-700 hover:underline">info@nobleminds.in.net</a>
                </div>
              </div>

              <div className="bg-white border border-emerald-100 rounded-lg p-6">
                <p className="text-gray-700">We prioritise direct, high-impact engagements. Email us with a brief scope and we will respond with a concise next-step plan.</p>
                <div className="mt-4 text-right">
                  <a href="#" className="text-emerald-600 font-medium hover:underline">Privacy & data handling</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
