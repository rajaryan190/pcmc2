import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    party: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ready to transform your political campaign? Our team of experts is here to help you achieve electoral success.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Send us a message</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="party" className="block text-sm font-medium text-gray-700">
                  Political Party (Optional)
                </label>
                <input
                  type="text"
                  name="party"
                  id="party"
                  value={formData.party}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
            <p className="mt-4 text-lg text-gray-600">
              Reach out to us through any of these channels or visit our office.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                {/* <dt className="flex-none">
                  <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt> */}
                {/* <dd className="text-base leading-7 text-gray-600">
                  123 Democracy Street<br />
                  New Delhi, 110001<br />
                  India
                </dd> */}
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  <a href="tel:+911234567890" className="hover:text-blue-600">
                 +91 9204791109
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  <a href="mailto:contact@politicalpro.com" className="hover:text-blue-600">
                    contact@politicalcampaignmanagementcommittee.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                {/* <dt className="flex-none">
                  <MessageSquare className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  <a href="https://wa.me/911234567890" className="hover:text-blue-600">
                    Connect on WhatsApp
                  </a>
                </dd> */}
              </div>
            </dl>

            {/* Map Placeholder */}
            {/* <div className="mt-8 rounded-lg bg-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
              <div className="mt-4 aspect-[4/3] w-full rounded-lg bg-gray-200 text-center text-gray-500 flex items-center justify-center">
                Interactive Map Coming Soon
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
