const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, All-Inclusive Pricing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            One comprehensive package with everything you need for lead
            generation success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl ring-2 ring-primary transform scale-105">

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 text-center">
                Complete Lead Generation Suite
              </h3>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Setup Fee */}
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-12 h-12 text-primary mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <h4 className="text-lg font-semibold text-gray-900">
                      One-Time Setup
                    </h4>
                    <div className="mt-4 flex items-baseline justify-center">
                      <span className="text-4xl font-extrabold text-gray-900">
                        $1,000
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Complete system implementation
                    </p>
                  </div>
                </div>

                {/* Monthly Fee */}
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-12 h-12 text-primary mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Monthly Maintenance
                    </h4>
                    <div className="mt-4 flex items-baseline justify-center">
                      <span className="text-4xl font-extrabold text-gray-900">
                        $250
                      </span>
                      <span className="ml-1 text-xl font-semibold text-gray-500">
                        /month
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Ongoing optimization & support
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mt-12">
                <h4 className="text-xl font-bold text-gray-900 text-center mb-6">
                  Everything Included:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Custom Lead Capture Forms",
                    "Advanced Automation Workflows",
                    "Real-Time Analytics Dashboard",
                    "CRM Integration Setup",
                    "Monthly Performance Reports",
                    "24/7 System Monitoring",
                    "Regular Optimization Updates",
                    "Dedicated Support",
                    "Unlimited Leads & Users",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-200">
                  Start Your Setup - $1,000
                </button>
                <a href="https://calendly.com/brad-dev25/new-meeting">
                <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-200">
                  Book a Discovery Call
                </button>
                </a>
              </div>

            </div>
          </div>

          {/* Comparison Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <span className="font-semibold">Why one package?</span> We believe
              in delivering complete solutions, not piecemeal features. Get
              everything you need for successful lead generation without hidden
              costs or upsells.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
