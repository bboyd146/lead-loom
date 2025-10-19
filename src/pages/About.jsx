import React from "react";
import owner from "../assets/owner.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <header className="space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            About LeadLoom
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            We help small businesses automate lead flows and sales tasks so
            teams can focus on selling. Simple, reliable automations, built for
            growth.
          </p>
        </header>

        {/* Mission + Values */}
        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <article className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              To remove manual work from sales and marketing so teams can spend
              more time closing deals and building customer relationships.
            </p>
          </article>

          <article className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">What We Build</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Custom automation stacks, integrations with CRMs, lead routing
              logic, follow-up sequences, and analytics dashboards that make
              outcomes measurable.
            </p>
          </article>

          <article className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">Our Values</h3>
            <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Pragmatic: measurable ROI before polished extras.</li>
              <li>• Trustworthy: security and reliability first.</li>
              <li>• Empathetic: design for the person using the tool.</li>
            </ul>
          </article>
        </section>

        {/* How we work */}
        <section className="mt-12 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">How we work</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">1. Discovery</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We map your current lead flow and identify manual points where
                automation will deliver value quickly.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">2. Build</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We implement integrations, routing rules, and sequences in the
                tools you already use — fast and secure.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">3. Measure & Iterate</h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We track key metrics, optimize workflows, and hand over
                documentation so your team owns the outcome.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center">Meet the Team</h2>
          <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
            A small team of engineers, designers, and former operators who love
            simplifying sales.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
            {/* Card 1 */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
              <img
                src={owner}
                alt="Brad — Founder"
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-4 font-semibold">Brad</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Founder & Head of Product
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold">
              Ready to automate your lead flow?
            </h3>
            <p className="mt-3">
              Book a free 15-minute consultation and we'll map quick wins for
              your team.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://calendly.com/brad-dev25/new-meeting"
                className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow hover:opacity-90"
              >
                Book a consult
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
