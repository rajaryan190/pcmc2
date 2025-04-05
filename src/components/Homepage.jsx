import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, TrendingUp, BarChart, MessageSquare, Target } from 'lucide-react';

const features = [
//   {
//     icon: BarChart,
//     title: "Data-Driven Strategy",
//     description: "Leverage advanced analytics and voter sentiment analysis to make informed campaign decisions."
//   },
//   {
//     icon: Users,
//     title: "Booth Level Management",
//     description: "Comprehensive ground-level strategy with booth-wise voter mapping and karyakarta coordination."
//   },
//   {
//     icon: MessageSquare,
//     title: "Digital Campaign Excellence",
//     description: "Expert management of social media, WhatsApp campaigns, and digital voter outreach."
//   },
//   {
//     icon: Target,
//     title: "Targeted Outreach",
//     description: "Precision-targeted messaging for different voter segments and demographics."
//   },
//   {
//     icon: Award,
//     title: "Proven Track Record",
//     description: "Successful campaigns across Lok Sabha, Vidhan Sabha, and local body elections."
//   },
//   {
//     icon: TrendingUp,
//     title: "Real-time Analytics",
//     description: "Live tracking of campaign performance and voter sentiment metrics."
//   }
];

const testimonials = [
  {
    content: "PoliticalPro has been instrumental in shaping our campaign strategy with their expertise and dedication. Their innovative approach and deep understanding of voter outreach have made a significant impact.",
    author: "Shambhu Sharan Patel ",
    role: "Rajya Sabha Sansad",
    imageUrl: "./Shambhu Sharan Patel.jpg"
  },
  {
    content: "PoliticalPro's strategic insights and digital expertise have greatly enhanced our outreach. Their commitment and professionalism are truly commendable.",
    author: "Sudarshan Kumar",
    role: "MLA Barbigha",
    imageUrl: "Sudarshan kumar.jpeg"
  },
  {
    content: "PoliticalPro's innovative strategies and grassroots approach have been a game-changer for our campaigns. Their expertise in modern political consultancy is unmatched.",
    author: "Pankaj Kumar Singh",
    role: "Cabinet Minister, Government of Delhi",
    imageUrl: "Pankaj Kumar Singh Cabinet Minister, Government of Delhi.jpg"
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="hero-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fadeIn">
              Winning Elections with Strategy – Your Trusted Political Consultancy in India!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Transform your political campaign with data-driven strategies, digital excellence, and grassroots mobilization. We combine modern technology with deep understanding of Indian politics to deliver winning results.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/get-started"
                className="btn-primary animate-fadeIn"
                style={{animationDelay: '0.4s'}}
              >
                Get Started – Build a Winning Campaign Today!
              </Link>
              <Link 
                to="/services" 
                className="text-sm font-semibold leading-6 text-white hover:text-tricolor-saffron transition-colors duration-200 animate-fadeIn"
                style={{animationDelay: '0.6s'}}
              >
                Explore Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Election Trends Section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-tricolor-saffron">Modern Indian Politics</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Indian Elections
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In today's digital age, winning elections requires a perfect blend of traditional grassroots campaigning and modern digital strategies. Our comprehensive approach covers every aspect of political campaigning in India.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="card hover:border-tricolor-saffron hover:border transition-all duration-200">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-tricolor-saffron" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-tricolor-blue py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-tricolor-saffron">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Indian Political Leaders
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-2xl">
                  <blockquote className="text-xl font-semibold leading-8 text-white text-justify ">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <div className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-800"
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-tricolor-saffron">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-tricolor-saffron to-tricolor-blue px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Political Campaign?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
              Let's work together to create a winning strategy that combines data-driven insights with deep understanding of Indian political landscape.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-tricolor-blue shadow-sm hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors duration-200"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}