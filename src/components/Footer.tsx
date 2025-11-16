export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src="/logo2.png" alt="Noble Minds Logo" className="h-12 w-auto mx-auto mb-4" />
          <p className="text-slate-300 mb-2">
            Shaping Strategy. Enabling Transformation. Empowering Growth.
          </p>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Noble Minds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
