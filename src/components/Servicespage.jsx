import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, MessageSquare, MapPin, Mic, Coins, PieChart } from 'lucide-react';


const services = [
    {
      icon: BarChart3,
      title: "Election Strategy & Planning",
      description: "Comprehensive campaign strategies tailored for Lok Sabha, Vidhan Sabha, and local elections. Our data-driven approach combines demographic analysis, historical voting patterns, and current political trends to create winning campaign blueprints.",
      features: [
        "Constituency-wise voter analysis",
        "Campaign timeline planning",
        "Resource allocation strategy",
        "Opposition research and analysis"
      ],
      image: "/s1.jpeg" // Add image path
    },
    {
      icon: PieChart,
      title: "Voter Data Analytics",
      description: "Advanced analytics using AI-powered tools to understand voter behavior, track sentiment, and identify key demographics. We transform complex data into actionable campaign insights.",
      features: [
        "Demographic segmentation",
        "Voter sentiment analysis",
        "Trend prediction models",
        "Real-time polling insights"
      ],
      image: "/s2.jpeg" // Add image path
    },
    {
      icon: MessageSquare,
      title: "Social Media & Digital Campaigns",
      description: "Expert management of digital presence across all major platforms. We create engaging content that resonates with Indian voters while maintaining compliance with ECI guidelines.",
      features: [
        "WhatsApp campaign management",
        "Social media strategy",
        "Content creation & scheduling",
        "Digital advertising campaigns"
      ],
      image: "/s3.jpeg" // Add image path
    },
    {
      icon: MapPin,
      title: "Ground Campaign & Mobilization",
      description: "Effective ground-level campaign management focusing on booth-level operations and voter outreach. We train your karyakartas and coordinate local campaign activities.",
      features: [
        "Booth level management",
        "Door-to-door campaign planning",
        "Karyakarta training programs",
        "Local event coordination"
      ],
      image: "/s4.jpeg" // Add image path
    },
    {
      icon: Mic,
      title: "Speechwriting & PR",
      description: "Professional speechwriting and media relations services tailored to Indian political context. We help craft your message and manage your public image effectively.",
      features: [
        "Speech preparation",
        "Media training",
        "Crisis management",
        "Press release management"
      ],
      image: "/s5.jpeg" // Add image path
    },
    {
      icon: Coins,
      title: "Fundraising & Compliance",
      description: "Strategic fundraising guidance while ensuring complete compliance with Election Commission of India (ECI) regulations. We help you manage campaign finances effectively.",
      features: [
        "Fundraising strategy",
        "Donor management",
        "ECI compliance guidance",
        "Financial reporting"
      ],
      image: "/s6.jpeg" // Add image path
    }
    ,
    {
      icon: Users,
      title: "Media Chopal Services",
      description: "Media Chopal Services blend traditional grassroots gatherings with modern media outreach to create highly engaging, local-level voter interactions. By organizing village-level meetings and leveraging digital platforms to amplify these events, this service helps political campaigns build trust, gather feedback, and deliver personalized messages that resonate with rural and semi-urban voters. It’s a powerful tool to connect candidates directly with the people in a culturally relevant and authentic way.",
      features: [
        "Local Chopal Events: Organize village and community-level meetings for direct voter interaction.",
        "Digital Integration: Live-stream or record sessions for wider reach via social media and messaging platforms.",
        "Hyper-local Content Creation: Videos, posts, and media content tailored to specific regions and dialects.",
        "Real-Time Feedback: Collect voter opinions and concerns to refine campaign messaging.",
        "Trust-Building Approach: Personal, face-to-face communication enhances candidate relatability.",
        "Amplified Media Reach: Use of WhatsApp, Facebook, YouTube, and local channels to maximize visibility."
      ],
      image: "/s7.jpeg" // Add image path
    },
    {
      icon: BarChart3,
      title: "Election Merchandise Supply",
      description: "We provide high-quality election merchandise including party flags, badges, T-shirts, banners, caps, and more. From design to delivery, our team ensures every item reflects your party’s identity and supports your campaign on the ground with reliable, customized branding.",
      features: [
        "Party Flags & Banners: Custom-designed flags and banners in party colors and symbols.",
        "Branded T-Shirts & Caps: High-quality apparel for campaign staff and supporters.",
        "Badges & Stickers: Eye-catching, wearable branding materials for visibility.",
        "Booth Decoration Kits: Complete sets for booth-level campaigning and promotion.",
        "Custom Design Support: Logo placement and party branding assistance.",
        "Bulk Supply & Timely Delivery: Reliable logistics to meet campaign timelines.",
        "Pan-India Distribution: Service coverage for both urban and rural constituencies.",
        "Affordable Packages: Cost-effective solutions for all scales of campaign needs."
      ],
      image: "/s8.jpeg" // Add image path
    }
  ];
  
  export default function Services() {
    return (
      <div className="bg-white py-24 sm:py-32">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive Political Campaign Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From strategy development to ground implementation, we provide end-to-end campaign solutions tailored for Indian politics.
            </p>
          </div>
        </div>
  
        {/* Services Grid */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-58 object-cover rounded-lg mb-6"
                />
                
                {/* Title and Icon */}
                <div className="flex items-center gap-x-4">
                  {React.createElement(service.icon, { className: "h-8 w-8 text-blue-600" })}
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{service.title}</h3>
                </div>
                
                {/* Description */}
                <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                
                {/* Features List */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
