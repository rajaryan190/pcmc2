import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div className="bg-blue-900 rounded-3xl px-6 py-16 sm:px-16 sm:py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Ready to Build Your Winning Campaign?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Let's create a customized strategy that works for your constituency.
        </p>
        <div className="mt-8 flex justify-center gap-x-6">
          <Link
            to="/get-started"
            className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow hover:bg-blue-50"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
