"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft } from "lucide-react";
import { FaAndroid } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "LhoShop eCommerce App",
      description:
        "A full-scale eCommerce platform similar to Flipkart, featuring a modern shopping app and a complete admin management panel. It handles everything from user authentication, product catalog, cart management, to secure checkout processes.",
      images: [
        "/project-images/lhoshop/storefront-ui.png",
        "/project-images/lhoshop/admin-dashboard.png",
        "/project-images/lhoshop/checkout-mobile.png"
      ],
      githubUrl: "https://github.com/RuthlessG-CYBER/LhoShop_App",
      adminGithubUrl: "https://github.com/RuthlessG-CYBER/LhoShop_E-commerce_AdminPanel_Website",
      appLink: "https://drive.google.com/file/d/1agAfTkSoYIgtSIxN1kDX44els9FyNnCd/view?usp=sharing",
      tags: ["React Native", "Node.js", "MongoDB", "Admin Panel"],
      date: "Oct 22, 2023, 9:00:00 AM",
      sender: "RuthlessG",
      email: "ruthless@example.com"
    },
    {
      title: "Artisan Haven",
      description:
        "An eco-friendly e-commerce store offering rustic healthy cakes, wholesome homemade cookies, and sustainable recycled products. Built with a focus on fast performance, SEO optimization, and a seamless user experience.",
      images: [
        "/project-images/artisan-haven/shop-ui.png",
        "/project-images/artisan-haven/bakery-hero.png",
        "/project-images/artisan-haven/sustainable-flatlay.png"
      ],
      githubUrl: "https://github.com/RuthlessG-CYBER/artisan_haven",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "SEO", "Stripe"],
      date: "Nov 15, 2023, 2:30:00 PM",
      sender: "RuthlessG",
      email: "ruthless@example.com"
    },
    {
      title: "Stylish E-Commerce App",
      description:
        "Modern ecommerce mobile app with secure payments, order tracking, and admin dashboard. It leverages native Android components for fluid animations and a premium feel.",
      images: [
        "/project-images/stylish-ecommerce/mobile-storefront.png",
        "/project-images/stylish-ecommerce/product-cart.png",
        "/project-images/stylish-ecommerce/order-tracking.png"
      ],
      githubUrl: "https://github.com/RuthlessG-CYBER/Stylish_E-Commerce_App.git",
      tags: ["Kotlin", "Compose", "Node.js", "MongoDB"],
      date: "Jan 05, 2024, 11:15:00 AM",
      sender: "RuthlessG",
      email: "ruthless@example.com"
    },
    {
      title: "RentHub Real Estate",
      description:
        "Full MERN real estate platform with authentication and production deployment. Users can list properties, search with advanced filters, and contact landlords directly through the platform.",
      images: [
        "/project-images/rent-hub/search-dashboard.png",
        "/project-images/rent-hub/apartment-interior.png",
        "/project-images/rent-hub/property-exterior.png"
      ],
      liveUrl: "https://rent-hub-frontend-five.vercel.app/",
      githubUrl: "https://github.com/RuthlessG-CYBER/RentHub_Frontend.git",
      tags: ["React", "TypeScript", "MongoDB"],
      date: "Feb 20, 2024, 4:45:00 PM",
      sender: "RuthlessG",
      email: "ruthless@example.com"
    },
    {
      title: "SmartQueue Healthcare",
      description:
        "Healthcare booking system powered by Redis and scalable backend architecture. It reduces patient wait times by optimizing queue distribution and sending real-time notifications.",
      images: [
        "/project-images/smart-queue/queue-dashboard.png",
        "/project-images/smart-queue/appointment-booking.png",
        "/project-images/smart-queue/clinic-waiting-area.png"
      ],
      githubUrl: "https://github.com/RuthlessG-CYBER/Smart_Queue_App.git",
      appLink: "https://drive.google.com/file/d/1a9cFNr-1p-N-GFy06sPsFZo0ycaqjFAr/view",
      tags: ["React Native", "Node.js", "Redis"],
      date: "Mar 10, 2024, 8:20:00 AM",
      sender: "RuthlessG",
      email: "ruthless@example.com"
    },
    {
      title: "Product Management System",
      description:
        "Enterprise admin dashboard with analytics and role-based access. Provides data visualization, user management, and seamless integration with existing enterprise APIs.",
      images: [
        "/project-images/product-management/overview-dashboard.png",
        "/project-images/product-management/catalog-management.png",
        "/project-images/product-management/analytics-reporting.png"
      ],
      tags: ["React", "Tailwind", "MongoDB"],
      githubUrl: "https://github.com/RuthlessG-CYBER",
      date: "Apr 02, 2024, 1:10:00 PM",
      sender: "RuthlessG",
      email: "ruthless@example.com"
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobileDetailView, setIsMobileDetailView] = useState(false);
  const selectedProject = projects[selectedIndex];

  return (
    <section id="projects" className="py-28 bg-[#050505]">
      <div className="px-8 md:px-20 w-full">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full"
          >
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-black text-[#06b6d4] tracking-widest uppercase">
                Projects
              </h2>
            </div>
            
            <div className="flex-1 md:text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Real-World & Best Projects
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed max-w-xl md:ml-auto">
                Production-ready applications built using modern technologies,
                scalable architecture, and real-world business logic.
              </p>
            </div>
          </motion.div>

          {/* The Mail-like Interface Container */}
          <div className="flex flex-col md:flex-row w-full text-gray-200 text-sm font-sans">
          
          {/* Middle Pane (Project List) */}
          <div className={`flex flex-col w-full md:w-[400px] lg:w-[450px] shrink-0 md:border-r border-white/5 -ml-4 ${isMobileDetailView ? 'hidden md:flex' : 'flex'}`}>
            <div className="flex-1">
              <div className="flex flex-col gap-2 md:pr-4 pb-8 md:pb-0">
                {projects.map((proj, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => {
                      setSelectedIndex(idx);
                      setIsMobileDetailView(true);
                    }}
                    className={`flex flex-col gap-2 p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedIndex === idx ? 'bg-[#27272a] text-white' : 'hover:bg-[#27272a]/50 text-gray-400'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h3 className={`font-semibold truncate ${selectedIndex === idx ? 'text-white' : 'text-gray-200'}`}>
                        {proj.title}
                      </h3>
                      <span className="text-xs whitespace-nowrap text-gray-500 pt-0.5">
                        {proj.date.split(',')[0]}
                      </span>
                    </div>
                    <p className="text-xs line-clamp-2 text-gray-400 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex gap-2 mt-1">
                      {proj.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="secondary" className={`${selectedIndex === idx ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-[#18181b] text-gray-400 hover:bg-[#27272a] border-white/5'} text-[10px] px-2 py-0 h-5`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Pane (Project Detail) */}
          <div className={`flex-col flex-1 min-w-0 ${isMobileDetailView ? 'flex' : 'hidden md:flex'}`}>
            {/* Minimal Mobile Back Button */}
            <div className="md:hidden p-4 border-b border-white/5 flex items-center">
              <div 
                onClick={() => setIsMobileDetailView(false)}
                className="hover:bg-white/10 p-1.5 rounded-md cursor-pointer transition-colors text-gray-200 flex items-center gap-1"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-semibold">Back to Projects</span>
              </div>
            </div>

            {/* Email Body / Project Detail Content */}
            <div className="flex-1">
              <div className="md:pl-8 flex flex-col gap-6">
                
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <p className="text-[#06b6d4] text-xs font-semibold tracking-wider uppercase mt-2">
                      Completed: {selectedProject.date}
                    </p>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Project Images showcased beautifully */}
                <div className="flex flex-col gap-4 mt-4 w-full">
                  {selectedProject.images.length > 0 && (
                    <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#18181b] h-[250px] md:h-[300px] lg:h-[350px]">
                      <img 
                        src={selectedProject.images[0]} 
                        alt={`${selectedProject.title} main preview`} 
                        className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-300" 
                      />
                    </div>
                  )}
                  {selectedProject.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.images.slice(1).map((img, idx) => (
                        <div key={idx} className="relative rounded-lg overflow-hidden border border-white/10 bg-[#18181b] h-[120px] md:h-[150px] lg:h-[180px] flex">
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} sub preview ${idx + 1}`} 
                            className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-300" 
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mr-2 self-center">Tech Stack:</span>
                  {selectedProject.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-white/10 text-gray-300 bg-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>


                {/* Attachments / Links */}
                {(selectedProject.liveUrl || selectedProject.githubUrl || selectedProject.adminGithubUrl || selectedProject.appLink) && (
                  <div className="mt-8 flex flex-col gap-3 pb-8">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Source Links & Demo</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.liveUrl && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#27272a] hover:bg-[#3f3f46] text-white px-4 py-2.5 rounded-md text-xs font-medium transition-colors border border-white/5">
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                          Live Demo
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-md text-xs font-medium transition-colors border border-white/5">
                          <Github className="w-4 h-4" />
                          App Source
                        </a>
                      )}
                      {selectedProject.adminGithubUrl && (
                        <a href={selectedProject.adminGithubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-md text-xs font-medium transition-colors border border-white/5">
                          <Github className="w-4 h-4" />
                          Admin Panel
                        </a>
                      )}
                      {selectedProject.appLink && (
                        <a href={selectedProject.appLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-md text-xs font-medium transition-colors border border-white/5">
                          <FaAndroid className="w-4 h-4 text-green-500" />
                          Download App
                        </a>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
