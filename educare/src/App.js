import React from "react";


export default function EducareLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold">A</div>
            <div>
              <div className="text-lg font-semibold">Aprime Digital Solution</div>
              <div className="text-sm text-gray-500">Educare — School Management System</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">Contact</a>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden text-sm text-gray-600">Call: 0277951415</div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-800">Educare — Smart School Management</h1>
            <p className="mt-6 text-lg text-gray-600">Manage students, teachers, fees and inventory from one cloud-based platform. Faster admin, transparent fees, and real-time reports for heads of school and parents.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">Request Demo</a>
              <a href="#pricing" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">View Pricing</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500">Students</div>
                <div className="font-semibold">Registration & Records</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500">Teachers</div>
                <div className="font-semibold">Schedules & Payroll</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500">Fees</div>
                <div className="font-semibold">Payments & Receipts</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500">Inventory</div>
                <div className="font-semibold">Stock & Canteen</div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Features section */}
        <section id="features" className="mt-16">
          <h2 className="text-2xl font-bold text-blue-800">Key Modules</h2>
          <p className="text-gray-600 mt-2">Everything a modern school needs — organized in clear modules.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard title="Student Management" desc="Registration, personal records, attendance, performance tracking and parent contacts." />
            <FeatureCard title="Teacher Management" desc="Teacher profiles, timetables, payroll items and leave management." />
            <FeatureCard title="Fee Management" desc="Flexible fee setups, receipts, outstanding tracking and payment reports." />
            <FeatureCard title="Inventory Management" desc="Stock control for textbooks, canteen items, assets and purchase logs." />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-12">
          <h2 className="text-2xl font-bold text-blue-800">Pricing</h2>
          <p className="text-gray-600 mt-2">Simple, transparent pricing — local currency (GHS).</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard title="Starter" price="GHS 1,000" perks={["Basic modules","Up to 300 students","Email support"]} />
            <PriceCard title="Standard" price="GHS 2,500" perks={["All modules","Up to 1,500 students","Priority support"]} featured />
            <PriceCard title="Enterprise" price="GHS 5,000" perks={["Custom integrations","Unlimited students","On-site training"]} />
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

        <footer className="mt-12 text-center text-xs text-gray-500 pb-8">Built with care for schools, Aprime Digital Solution</footer>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="font-semibold text-blue-700">{title}</div>
      <div className="text-sm text-gray-600 mt-2">{desc}</div>
    </div>
  );
}

function PriceCard({ title, price, perks = [], featured = false }) {
  return (
    <div className={`p-6 rounded-lg ${featured ? "bg-blue-700 text-white shadow-lg" : "bg-white shadow-sm"}`}>
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-4 text-2xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {perks.map((p, i) => (
          <li key={i} className={featured ? "text-blue-100" : "text-gray-700"}>• {p}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a className={`inline-block px-4 py-2 rounded ${featured ? "bg-white text-blue-700" : "bg-blue-600 text-white"}`} href="#contact">Get Started</a>
      </div>
    </div>
  );
}
