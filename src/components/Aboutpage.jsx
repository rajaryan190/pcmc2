import React from 'react';
import { Award, Users, Globe2, TrendingUp } from 'lucide-react';

const stats = [
  { name: 'Elections Won', value: '15+' },
  { name: 'States Covered', value: '5+' },
  { name: 'Team Members', value: '35+' },
  { name: 'Years Experience', value: '5+' }
];

const team = [
  {
    name: 'Prince kumar',
    role: 'co-founder',
    image: '/p1.jpeg',
    // bio: 'Former political advisor with 20+ years of experience in national campaigns.'
  },
  {
    name: 'Ritesh Pandey',
    role: 'co-founder',
    image: '/p2.jpeg',
    // bio: 'PhD in Political Science, expert in voter behavior analysis and electoral trends.'
  },
  // {
  //   name: 'Amit Patel',
  //   role: 'Digital Campaign Director',
  //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  //   bio: 'Pioneering digital-first campaign strategies for modern Indian politics.'
  // },
  // {
  //   name: 'Meera Singh',
  //   role: 'Ground Operations Head',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  //   bio: 'Specialist in booth management and grassroots campaign organization.'
  // }
];

const milestones = [
  {
    year: '2019',
    title: 'JVM (Babulal mrandi)',
    description: 'Started with a vision to modernize Indian political campaigns.'
  },
  {
    year: '2020',
    title: 'RJD (Tejaswi Yadav)',
    description: 'First major victory in national elections with data-driven strategy.'
  },
  {
    year: '2022',
    title: 'Congress (Priyanka Gandhi)',
    description: 'Pioneered AI-powered voter sentiment analysis in Indian politics.'
  },
  // {
  //   year: '2024',
  //   title: 'Pan-India Presence',
  //   description: 'Expanded operations to all major states with specialized teams.'
  // }
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Empowering Political Leaders with Data-Driven Success
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Since 2009, we've been revolutionizing political campaigns in India through innovative strategies, deep insights, and proven methodologies.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Founder
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Our diverse team brings together expertise in political strategy, data analytics, digital campaigns, and ground operations.
            </p> */}
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[2/2] w-full rounded-2xl object-cover" src={person.image} alt={person.name} />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-blue-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Journey</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From our founding to present day, we've been at the forefront of political innovation in India.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <div className="space-y-16">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex flex-col gap-x-4 gap-y-6 md:flex-row">
                  <div className="flex-none">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{milestone.title}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
