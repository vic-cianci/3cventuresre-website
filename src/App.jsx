import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight } from "lucide-react";

export default function App() {
  const [page, setPage] = React.useState("home");

  return (
    <div className="bg-[#F8F7F4] text-[#0B1F3A] min-h-screen font-serif">
      <Header setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

function Header({ setPage }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <button onClick={() => setPage("home")} className="flex items-center gap-4">
          <img src="/images/3cventures-logo.png" className="h-12" alt="3C Ventures Logo" />
        </button>

        <nav className="hidden md:flex gap-10 tracking-wide text-sm uppercase">
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Services", "services"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([label, key]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className="hover:text-[#8C6A3B] transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Home({ setPage }) {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <img
          src="/images/66-e-second-hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl text-white"
          >
            <p className="tracking-[0.4em] uppercase text-sm mb-6">
              Luxury Coastal Development • Brunswick County, NC
            </p>

            <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8">
              Coastal Homes
              <br />
              Designed to Endure.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-gray-200">
              3C Ventures develops architecturally refined luxury residences throughout Brunswick County's premier coastal communities, blending elevated craftsmanship with timeless coastal living.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => setPage("projects")}
                className="bg-white text-[#0B1F3A] hover:bg-gray-100 rounded-full px-8 py-6 text-sm tracking-wide uppercase"
              >
                View Portfolio
              </Button>

              <Button
                onClick={() => setPage("contact")}
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white hover:text-[#0B1F3A] px-8 py-6 text-sm uppercase"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#8C6A3B] mb-4">
            Development Philosophy
          </p>

          <h2 className="text-5xl font-light leading-tight mb-8">
            Thoughtfully crafted homes rooted in coastal living.
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Our projects are guided by premium locations, refined architectural direction, and an understanding of how luxury coastal homes should function, feel, and endure.
          </p>

          <Button
            onClick={() => setPage("about")}
            className="rounded-full px-8 py-6 bg-[#0B1F3A] hover:bg-[#132b4d]"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <img
            src="/images/66-e-second-interior.jpg"
            className="rounded-3xl h-[450px] object-cover w-full"
          />

          <img
            src="/images/105-by-the-sea-interior.jpg"
            className="rounded-3xl h-[450px] object-cover w-full mt-16"
          />
        </div>
      </section>

      <section className="bg-[#0B1F3A] text-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#C5A46D] mb-4">
                Featured Properties
              </p>

              <h2 className="text-5xl font-light">
                Signature Coastal Residences
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "105 By the Sea",
                location: "Holden Beach, NC",
                image: "/images/105-by-the-sea-exterior.jpg",
              },
              {
                title: "66 E Second",
                location: "Ocean Isle Beach, NC",
                image: "/images/66-e-second-exterior.jpg",
              },
              {
                title: "41 Grande View",
                location: "Ocean Isle Beach, NC",
                image: "/images/41-grande-view-exterior.jpg",
              },
            ].map((project) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={project.title}
                className="group"
              >
                <div className="overflow-hidden rounded-3xl mb-6">
                  <img
                    src={project.image}
                    className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <MapPin size={16} />
                  {project.location}
                </div>

                <h3 className="text-3xl font-light">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/images/41-grande-view-aerial.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-4xl text-white">
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-[#D6BC8A]">
              Ocean Isle Beach
            </p>

            <h2 className="text-6xl font-light leading-tight mb-8">
              Modern coastal architecture positioned between marsh and ocean.
            </h2>

            <Button
              onClick={() => setPage("projects")}
              className="rounded-full px-10 py-6 bg-white text-[#0B1F3A] hover:bg-gray-100"
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  const owners = [
    {
      name: "Vic Cianci",
      email: "vic@3cvent.com",
      bio: "Co-founder of 3C Ventures with a focus on luxury coastal development strategy, project execution, and identifying high-value residential opportunities throughout Brunswick County.",
    },
    {
      name: "Mike Cianci",
      email: "mike@3cvent.com",
      bio: "Co-founder specializing in project oversight, development coordination, and delivering refined coastal residences designed around long-term value and craftsmanship.",
    },
    {
      name: "Ryan Casano",
      email: "ryan@3cvent.com",
      bio: "Co-founder focused on operations, acquisition strategy, and helping guide projects from concept through completion across premier island communities.",
    },
  ];

  return (
    <section className="pt-40 pb-32 px-8 max-w-5xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-sm text-[#8C6A3B] mb-4">
        About 3C Ventures
      </p>

      <h1 className="text-6xl font-light mb-10 leading-tight">
        A development firm built around thoughtful coastal living.
      </h1>

      <div className="space-y-8 text-lg leading-relaxed text-gray-700">
        <p>
          3C Ventures is a luxury coastal development firm focused on creating architecturally refined residences throughout Brunswick County's premier island communities.
        </p>

        <p>
          Our approach combines strategic land acquisition, thoughtful design direction, and disciplined project execution to deliver homes that reflect both timeless coastal architecture and modern luxury living.
        </p>

        <p>
          From Ocean Isle Beach to Holden Beach, each project is designed to embrace its surroundings while delivering elevated craftsmanship, exceptional functionality, and long-term value.
        </p>
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-8">
        {owners.map((owner) => (
          <div
            key={owner.name}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-3xl font-light mb-3">{owner.name}</h3>

            <p className="text-sm uppercase tracking-wide text-[#8C6A3B] mb-6">
              Co-Founder
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              {owner.bio}
            </p>

            <a
              href={`mailto:${owner.email}`}
              className="text-[#0B1F3A] underline underline-offset-4"
            >
              {owner.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Land Acquisition",
      description:
        "Strategic sourcing and acquisition of premier coastal development sites.",
    },
    {
      title: "Luxury Residential Development",
      description:
        "Ground-up development of high-end custom and speculative residences.",
    },
    {
      title: "Construction Management",
      description:
        "Comprehensive oversight from planning through final completion.",
    },
    {
      title: "Project Planning",
      description:
        "Thoughtful coordination of design, permitting, and execution.",
    },
  ];

  return (
    <section className="pt-40 pb-32 px-8 max-w-7xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-sm text-[#8C6A3B] mb-4">
        Services
      </p>

      <h1 className="text-6xl font-light mb-16">
        End-to-end development expertise.
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className="rounded-[2rem] border-none shadow-none bg-white p-8"
          >
            <CardContent className="p-0">
              <h3 className="text-3xl font-light mb-6">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "105 By the Sea",
      location: "Holden Beach, NC",
      description:
        "A luxury coastal residence designed around elevated outdoor living, bright modern interiors, and refined architectural detailing.",
      image: "/images/105-by-the-sea-exterior.jpg",
    },
    {
      title: "66 E Second",
      location: "Ocean Isle Beach, NC",
      description:
        "A contemporary coastal home featuring dramatic vaulted ceilings, expansive glazing, resort-style outdoor living, and sophisticated modern finishes.",
      image: "/images/66-e-second-hero.jpg",
    },
    {
      title: "41 Grande View",
      location: "Ocean Isle Beach, NC",
      description:
        "Currently approaching completion, this modern waterfront residence captures expansive marsh and ocean views through elevated architecture and layered outdoor living spaces.",
      image: "/images/41-grande-view-aerial.jpg",
    },
  ];

  return (
    <section className="pt-40 pb-32 px-8 max-w-7xl mx-auto">
      <p className="uppercase tracking-[0.3em] text-sm text-[#8C6A3B] mb-4">
        Portfolio
      </p>

      <h1 className="text-6xl font-light mb-20 leading-tight">
        Distinguished coastal development projects.
      </h1>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <img
                src={project.image}
                className="rounded-[2rem] h-[650px] w-full object-cover shadow-2xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#8C6A3B] mb-4">
                <MapPin size={16} />
                {project.location}
              </div>

              <h2 className="text-5xl font-light mb-8 leading-tight">
                {project.title}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10 text-sm uppercase tracking-wide text-gray-500">
                <div>Luxury Coastal Design</div>
                <div>Elevated Construction</div>
                <div>Premium Island Location</div>
                <div>Modern Coastal Architecture</div>
              </div>

              <Button className="rounded-full px-8 py-6 bg-[#0B1F3A] hover:bg-[#132b4d]">
                View Project
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="pt-40 pb-32 px-8 max-w-4xl mx-auto text-center">
      <p className="uppercase tracking-[0.3em] text-sm text-[#8C6A3B] mb-4">
        Contact
      </p>

      <h1 className="text-6xl font-light leading-tight mb-10">
        Let's discuss your next opportunity.
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
        Whether you're interested in partnership opportunities, available projects, or future developments, we welcome the conversation.
      </p>

      <div className="inline-flex items-center gap-3 text-xl border border-gray-300 rounded-full px-8 py-5 bg-white">
        <Mail size={20} />
        3cvent@gmail.com
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/images/3cventures-logo.png" className="h-12" alt="3C Ventures Logo" />

        <p className="text-sm tracking-wide text-gray-500 uppercase">
          © {new Date().getFullYear()} 3C Ventures Real Estate Group
        </p>
      </div>
    </footer>
  );
}
