import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const plans = [
//   {
//     name: "Basic Campaign",
//     price: "₹5,00,000",
//     description: "Perfect for local body elections and first-time candidates",
//     features: [
//       "Basic voter data analysis",
//       "Social media campaign setup",
//       "Ground campaign planning",
//       "Weekly progress reports",
//       "Basic voter outreach strategy"
//     ]
//   },
//   {
//     name: "Advanced Campaign",
//     price: "₹15,00,000",
//     description: "Ideal for assembly elections and experienced politicians",
//     features: [
//       "Advanced voter analytics",
//       "Comprehensive digital strategy",
//       "Booth-level management",
//       "Daily campaign monitoring",
//       "Crisis management support",
//       "Media training sessions",
//       "WhatsApp campaign management"
//     ]
//   },
//   {
//     name: "Premium Campaign",
//     price: "Custom",
//     description: "Tailored for national elections and major political campaigns",
//     features: [
//       "Full-scale campaign management",
//       "AI-powered voter analysis",
//       "24/7 campaign support",
//       "Custom digital strategy",
//       "Complete ground operations",
//       "PR and media management",
//       "Real-time analytics dashboard",
//       "Opposition research"
//     ]
//   }
];

const process = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Schedule a free strategy call with our political experts to discuss your campaign goals."
  },
  {
    step: 2,
    title: "Campaign Analysis",
    description: "We analyze your constituency, voter demographics, and current political landscape."
  },
  {
    step: 3,
    title: "Strategy Development",
    description: "Our team creates a customized campaign strategy tailored to your specific needs."
  },
  {
    step: 4,
    title: "Implementation",
    description: "We execute the strategy with continuous monitoring and real-time adjustments."
  }
];

export default function GetStarted() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Start Your Winning Campaign
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the right package for your political campaign and begin your journey to electoral success.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our proven process ensures a systematic approach to campaign success.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.step} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      {/* <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Campaign Packages
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the package that best fits your campaign needs and budget.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{plan.description}</p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">/campaign</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Political Campaign?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Schedule a free consultation with our experts and start your journey to electoral success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Your Free Consultation
              </a>
              <a href="/services"  className="text-sm font-semibold leading-6 text-white">
                Learn More <span aria-hidden="true">→</span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}