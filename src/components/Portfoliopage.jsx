import React from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const campaigns = [
  {
    title: "State Assembly Election 2023",
    description: "Led a comprehensive digital-first campaign strategy that resulted in significant victory margins across multiple constituencies.",
    metrics: [
      { label: "Voter Turnout Increase", value: "12%" },
      { label: "Social Media Reach", value: "5M+" },
      { label: "Constituencies Won", value: "42" }
    ],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    testimonial: {
      quote: "Their data-driven approach and ground strategy made all the difference in our campaign success.",
      author: "Senior Party Leader",
      role: "State Assembly"
    }
  },
  {
    title: "Municipal Corporation Elections 2022",
    description: "Implemented innovative ward-level outreach programs combined with targeted digital campaigns for urban voters.",
    metrics: [
      { label: "Digital Engagement", value: "2M+" },
      { label: "Ward Coverage", value: "100%" },
      { label: "Victory Rate", value: "68%" }
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    testimonial: {
      quote: "Their understanding of local issues and voter sentiment was exceptional.",
      author: "Municipal Committee Head",
      role: "City Corporation"
    }
  },
  {
    title: "Lok Sabha Campaign 2024",
    description: "Managed end-to-end campaign strategy across multiple constituencies with focus on booth-level management.",
    metrics: [
      { label: "Constituencies", value: "25+" },
      { label: "Volunteer Network", value: "50K+" },
      { label: "Success Rate", value: "92%" }
    ],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    testimonial: {
      quote: "Their strategic planning and execution capabilities are unmatched in the industry.",
      author: "Campaign Director",
      role: "National Party"
    }
  }
];

const achievements = [
  {
    icon: TrendingUp,
    title: "150+ Successful Campaigns",
    description: "Across national, state, and local elections"
  },
  {
    icon: Users,
    title: "50M+ Voters Reached",
    description: "Through integrated digital and ground campaigns"
  },
  {
    icon: Award,
    title: "92% Success Rate",
    description: "In major election campaigns"
  },
  {
    icon: Target,
    title: "28 States Covered",
    description: "Pan-India campaign experience"
  }
];

export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Success Stories
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our track record of successful political campaigns across India, powered by data-driven strategies and ground-level execution.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              {React.createElement(achievement.icon, { className: "h-8 w-8 text-blue-600" })}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{achievement.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Case Studies */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className={`mb-24 ${index !== campaigns.length - 1 ? 'border-b border-gray-200 pb-24' : ''}`}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">{campaign.title}</h2>
                  <p className="mt-4 text-lg text-gray-600">{campaign.description}</p>
                  
                  <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
                    {campaign.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="border-l-4 border-blue-600 pl-4">
                        <dt className="text-sm font-medium text-gray-500">{metric.label}</dt>
                        <dd className="mt-1 text-2xl font-semibold text-gray-900">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <blockquote className="mt-8 border-l-4 border-blue-600 pl-4">
                    <p className="text-lg italic text-gray-900">"{campaign.testimonial.quote}"</p>
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-gray-900">{campaign.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{campaign.testimonial.role}</p>
                    </footer>
                  </blockquote>
                </div>
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
