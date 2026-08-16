// components/HowItWorks.tsx
import { RiCarWashingLine, RiCustomerService2Line, RiSettings3Line, RiCheckDoubleLine } from "@remixicon/react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: RiCustomerService2Line,
      title: "Call or Book Online",
      description: "Reach us 24/7 via phone, WhatsApp, or our website. Tell us your issue and location.",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      id: 2,
      icon: RiCarWashingLine,
      title: "We Come to You",
      description: "Our mobile unit arrives at your spot within 5-15 minutes, fully equipped to fix your car.",
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      id: 3,
      icon: RiSettings3Line,
      title: "Fix On-Site",
      description: "Certified mechanics diagnose and repair your vehicle right there—no towing, no waiting.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      id: 4,
      icon: RiCheckDoubleLine,
      title: "Drive Away Happy",
      description: "Get transparent pricing, quality parts, and a service warranty. You're back on the road.",
      color: "bg-violet-50 text-violet-700 border-violet-200",
    },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-5">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Your car repair journey in four simple steps. Fast, transparent, and without the workshop hassle.
          </p>
        </div>

        {/* steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connector line (desktop) */}
          <div className="absolute left-[15%] top-1/2 hidden h-0.5 w-[70%] -translate-y-1/2 bg-gray-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                {/* step number / circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-sm md:h-20 md:w-20">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${step.color} border`}>
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                </div>

                {/* content */}
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* optional step number indicator for mobile */}
                <span className="mt-3 text-xs font-semibold text-gray-400">
                  0{step.id}
                </span>
              </div>
            );
          })}
        </div>

        {/* bottom cta */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Get Started Now
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}