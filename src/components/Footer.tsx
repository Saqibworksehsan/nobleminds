export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 py-14 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND BLOCK */}
          <div className="flex items-start">
            <div className="flex items-center p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">

              {/* Logo Circle */}
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-white via-slate-100 to-slate-200 shadow mr-4">
                <img
                  src="/favicon2.png"
                  className="h-12 w-12 drop-shadow-sm"
                  alt="Noble Minds Logo"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  Noble Minds
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Shaping strategy. Enabling transformation.
                </p>
              </div>
            </div>
          </div>

          {/* NAV BLOCK */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 tracking-wide">
              Explore
            </h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#services" className="text-slate-600 hover:text-emerald-600 transition">
                Services
              </a>
              <a href="#leadership" className="text-slate-600 hover:text-emerald-600 transition">
                Leadership
              </a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-600 transition">
                Contact
              </a>
            </nav>
          </div>

          {/* CONTACT BLOCK */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 tracking-wide">
              Contact
            </h4>
            <p className="text-slate-600">+91 80156 21121</p>
            <a 
              href="mailto:info@nobleminds.in.net" 
              className="text-slate-600 hover:text-emerald-600 transition block"
            >
              info@nobleminds.in.net
            </a>

            <div className="mt-4">
              <span className="inline-block h-1 w-28 bg-orange-500 rounded-full"></span>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Noble Minds. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
