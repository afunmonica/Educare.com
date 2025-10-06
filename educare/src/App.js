import React from "react";


export default function EducareLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold shadow-sm">A</div>
            <div>
              <div className="text-base font-semibold tracking-tight">Aprime Digital Solution</div>
              <div className="text-xs text-gray-500">Educare — School Management</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">Contact</a>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden text-sm text-gray-600">Call: 0277951415</div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="relative">
          <div className="pointer-events-none absolute -top-8 -left-8 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl"></div>
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-indigo-200/50 blur-2xl"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent">Educare — Smart School Management</h1>
            <p className="mt-5 text-lg text-gray-600">Manage students, teachers, fees and inventory from one cloud-based platform. Faster admin, transparent fees, and real-time reports for heads of school and parents.</p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Request Demo</a>
              <a href="#pricing" className="px-6 py-3 border border-blue-600 text-blue-700 rounded-md hover:bg-blue-50">View Pricing</a>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-left">
                <div className="text-sm text-gray-500">Students</div>
                <div className="font-semibold">Registration & Records</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-left">
                <div className="text-sm text-gray-500">Teachers</div>
                <div className="font-semibold">Schedules & Payroll</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-left">
                <div className="text-sm text-gray-500">Fees</div>
                <div className="font-semibold">Payments & Receipts</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition text-left">
                <div className="text-sm text-gray-500">Inventory</div>
                <div className="font-semibold">Stock & Canteen</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[420px] rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-white ring-1 ring-blue-200/60 shadow-lg overflow-hidden">
              <img src="/educare.png" alt="dashboard" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Features section */}
        <section id="features" className="mt-16">
          <h2 className="text-2xl font-bold text-blue-800">Key Modules</h2>
          <p className="text-gray-600 mt-2">Everything a modern school needs — organized in clear modules.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard title="Student Management" desc="Registration, personal records, attendance, performance tracking and parent contacts." icon="🎓" />
            <FeatureCard title="Teacher Management" desc="Teacher profiles, timetables, payroll items and leave management." icon="👩‍🏫" />
            <FeatureCard title="Fee Management" desc="Flexible fee setups, receipts, outstanding tracking and payment reports." icon="💳" />
            <FeatureCard title="Inventory Management" desc="Stock control for textbooks, canteen items, assets and purchase logs." icon="📦" />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-800">Pricing</h2>
          <p className="text-gray-600 mt-2">Simple, transparent pricing — local currency (GHS).</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard title="Basic" price="GHS 150" perks={["Monthly","All features inclusive"]} color="green" />
            <PriceCard title="Standard" price="GHS 500" perks={["Termly","All features inclusive"]} featured color="blue" />
            <PriceCard title="Enterprise" price="GHS 1800" perks={["Annual","All features inclusive"]} color="purple" />
          </div>
        </section>

        {/* About and Contact */}
        <section id="about" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">About Aprime Digital Solution</h3>
            <p className="mt-3 text-gray-600">We build practical, affordable software for schools in Ghana. Our team helps with setup, migration, training and ongoing support so your school can focus on teaching.</p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Local support & training</li>
              <li>• Secure data and backups</li>
              <li>• Easy-to-use admin dashboard</li>
            </ul>
          </div>

          <div id="contact" className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold">Contact & Demo</h4>
            <p className="text-sm text-gray-600 mt-2">Call to schedule a free demo or request pricing for your school size.</p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V5" /></svg>
                <div className="text-sm">aprimedigitalsolution@gmail.com</div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V5" /></svg>
                <div className="text-sm">0277951415 / 0200159014</div>
              </div>

              <a href="mailto:aprimedigitalsolution@gmail.com" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Email Us</a>
            </div>

            <div className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} Aprime Digital Solution</div>
          </div>
        </section>

        {/* CTA band */}
        <section className="mt-16">
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">Ready to simplify your school operations?</div>
              <div className="text-sm text-blue-100">Get a free walkthrough — no commitment.</div>
            </div>
            <a href="#contact" className="px-5 py-2 bg-white text-blue-700 rounded-md font-medium shadow hover:shadow-md">Book a Demo</a>
          </div>
        </section>

        <footer className="mt-12 text-center text-xs text-gray-500 pb-8">Built with care for schools, Aprime Digital Solution</footer>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow transition">
      <div className="flex items-center gap-2">
        {icon ? <span className="text-xl" aria-hidden>{icon}</span> : null}
        <div className="font-semibold text-blue-700">{title}</div>
      </div>
      <div className="text-sm text-gray-600 mt-2">{desc}</div>
    </div>
  );
}

function PriceCard({ title, price, perks = [], featured = false, color = "blue" }) {
  // Predeclare classes explicitly so Tailwind can see them
  const colorStyles = {
    blue: {
      featuredContainer: "bg-blue-700 text-white shadow-lg",
      defaultContainer: "bg-white shadow-sm ring-1 ring-blue-200",
      mutedText: "text-blue-100",
      ctaFeatured: "bg-white text-blue-700",
      ctaDefault: "bg-blue-600 text-white",
    },
    green: {
      featuredContainer: "bg-green-700 text-white shadow-lg",
      defaultContainer: "bg-white shadow-sm ring-1 ring-green-200",
      mutedText: "text-green-100",
      ctaFeatured: "bg-white text-green-700",
      ctaDefault: "bg-green-600 text-white",
    },
    purple: {
      featuredContainer: "bg-purple-700 text-white shadow-lg",
      defaultContainer: "bg-white shadow-sm ring-1 ring-purple-200",
      mutedText: "text-purple-100",
      ctaFeatured: "bg-white text-purple-700",
      ctaDefault: "bg-purple-600 text-white",
    },
  };

  const palette = colorStyles[color] || colorStyles.blue;
  const containerClass = featured ? palette.featuredContainer : palette.defaultContainer;
  const listTextClass = featured ? palette.mutedText : "text-gray-700";
  const ctaClass = featured ? palette.ctaFeatured : palette.ctaDefault;

  return (
    <div className={`p-6 rounded-lg ${containerClass}`}>
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-4 text-2xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {perks.map((p, i) => (
          <li key={i} className={listTextClass}>• {p}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a className={`inline-block px-4 py-2 rounded ${ctaClass}`} href="#contact">Get Started</a>
      </div>
    </div>
  );
}
