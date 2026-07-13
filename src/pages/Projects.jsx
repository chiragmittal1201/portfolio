import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = {
    featured: [
      {
        title: "BridgeNet",
        status: "Work In Progress",
        github: "https://github.com/chiragmittal1201/BridgeNet",
        live: "https://alumni-management-240b6.web.app",
        description:
          "More than a college project, BridgeNet is an attempt to build a long-term ecosystem connecting students, alumni, and institutions. It represents my interest in product thinking, network-driven systems, and solving problems that continue to exist long after graduation.",
      },

      {
        title: "Full-Stack Ecommerce Platform",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/Ecommerce",
        description:
          "Full-stack ecommerce platform built with React, Node.js, Express, MongoDB, and JWT authentication featuring customer & admin dashboards, product management, order processing, coupons, contact management, and configurable payment/delivery settings.",
      },
    ],

    products: [

      {
        title: "Full-Stack Ecommerce Platform",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/Ecommerce",
        description:
          "Full-stack ecommerce platform built with React, Node.js, Express, MongoDB, and JWT authentication featuring customer & admin dashboards, product management, order processing, coupons, contact management, and configurable payment/delivery settings.",
      },
      
      {
        title: "BridgeNet",
        status: "Work In Progress",
        github: "https://github.com/chiragmittal1201/BridgeNet",
        live: "https://alumni-management-240b6.web.app",
        description:
          "A networking platform designed to connect students, alumni, and institutions through mentorship, opportunities, and long-term professional relationships.",
      },

      {
        title: "Bill Set",
        status: "Work In Progress",
        github: "#",
        description:
          "Custom billing and customer ledger software built for a niche market still dependent on handwritten bills and manually maintained records.",
      },

      {
        title: "Open Shelf",
        status: "Live",
        github: "https://github.com/chiragmittal1201/Open-Shelf",
        live: "https://open-shelf.netlify.app/",
        description:
          "A digital publishing platform created to showcase stories and written work through a focused reading experience.",
      },

      {
        title: "Secure Vault",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/Securevault",
        description:
          "A privacy-focused note storage application built around secure authentication and protected data handling.",
      },
    ],

    services: [
      {
        title: "Authentication Service",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/Login-API",
        live: "",
        description:
          "Reusable authentication infrastructure supporting login, OTP verification, RBAC, JWT and Google authentication.",
      },

      {
        title: "KYC Verification Service",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/kyc-verification-api",
        live: "",
        description:
          "Reusable Aadhaar and bank verification service built for streamlined identity verification workflows.",
      },

      {
        title: "Image Microservice",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/image-microservice",
        live: "",
        description:
          "Media processing service supporting upload, compression, watermarking and cloud storage integration.",
      },
    ],

    automation: [
      {
        title: "NSE Pattern Discovery Tool",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/nse-automation",
        live: "",
        description:
          "Automation tool that extracts and processes NSE data to assist market research and pattern discovery.",
      },

      {
        title: "Pixiebooth",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/pixiebooth",
        live: "",
        description:
          "Rapid prototype that aggregates event information from multiple sources into structured outputs.",
      },
    ],

    experiments: [
      {
        title: "Trap Ball",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/TrapBall-Game",
        download: "https://github.com/chiragmittal1201/TrapBall-Game/releases/download/trap_ball/index.html",
        description:
          "Arcade-style game project built as a personal challenge and learning exercise.",
      },

      {
        title: "2048",
        status: "Finished",
        github: "https://github.com/chiragmittal1201/2048",
        download: "https://github.com/chiragmittal1201/2048/releases/download/2048/2048.exe",
        description:
          "Implementation of the classic 2048 puzzle game focused on game logic and interaction design.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("featured");

  const [activeProject, setActiveProject] = useState(
    projects.featured[0]
  );

  const handleCategory = (category) => {
    setActiveCategory(category);
    setActiveProject(projects[category][0]);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0008] text-white">

      <div
        className="absolute inset-0"
        style={{
          background: `
        radial-gradient(
          circle at 76% 50%,
          rgba(210,70,180,0.78) 0%,
          rgba(140,50,160,0.52) 28%,
          rgba(50,0,30,0.16) 55%,
          rgba(11,0,8,1) 75%
        )
      `,
        }}
      />

      <div className="relative z-10 px-6 py-12 md:px-20">

        {/* Navigation */}

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-4
            text-center
            md:gap-12
          "
        >
          <Link
            to="/"
            className="
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105
            "
          >HOME</Link>
          <Link
            to="/beyond-code"
            className="
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105
            "
          >BEYOND CODE</Link>
          <Link
            to="/perspective"
            className="
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105
            "
          >PERSPECTIVE</Link>
          <Link
            to="/capabilities"
            className="
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105
            "
          >CAPABILITIES</Link>
        </div>

        {/* Hero */}

        <div className="mt-6 md:mt-10">

          <h1 className="garet-font text-5xl md:text-8xl">
            PROJECTS
          </h1>

          <p className="mt-6 max-w-5xl text-white/50 leading-relaxed">
            Products, services, automation tools and experiments
            built while exploring software, systems and business
            problems.
          </p>

        </div>


        {/* Categories */}

        <div className="mt-12">

          <p className="text-sm tracking-[6px] text-[#FF69D5]">
            CATEGORIES
          </p>

          <div
            className="
            mt-6
            flex
            flex-wrap
            justify-center
            gap-4
            md:mt-10
            md:justify-start
            md:gap-16
            "
          >

            {["featured", "products", "services", "automation", "experiments"].map(
              (category) => (

                <button
                  key={category}
                  onClick={() => handleCategory(category)}
                  className={`
                tracking-[4px]
                uppercase
                transition-all
                duration-300
                hover:text-[#FF69D5]
                transition-all
                duration-300
                hover:text-[#FF69D5]
                hover:translate-x-2
                hover:scale-105

                ${activeCategory === category
                      ? "text-[#FF69D5]"
                      : "text-white/40"
                    }
              `}
                >
                  {category} →
                </button>

              )
            )}

          </div>

        </div>

        {/* Main Content */}

        <div className="mt-16 grid gap-40 lg:grid-cols-[250px_1fr]">

          {/* Project List */}

          <div
            className="
            space-y-4
            text-center
            lg:text-left
            "
          >

            {projects[activeCategory].map((project) => (

              <button
                key={project.title}
                onClick={() => setActiveProject(project)}
                className={`
              block
              text-left
              tracking-[4px]
              uppercase
              transition-all
              duration-300
              hover:text-[#FF69D5]
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105

              ${activeProject?.title === project.title
                    ? "text-[#FF69D5]"
                    : "text-white/50"
                  }
            `}
              >
                {project.title} →
              </button>

            ))}

          </div>

          {/* Project Detail */}

          {activeProject && (

            <div className="w-full max-w-3xl">

              <h2 className="garet-font text-4xl md:text-6xl">
                {activeProject.title}
              </h2>

              <p className="mt-6 tracking-[4px] text-[#FF69D5] uppercase text-sm">
                {activeProject.status}
              </p>

              <p
                className="
                  mt-6
                  text-white/70
                  leading-relaxed
                  md:mt-10
                  md:leading-loose
                "
              >
                {activeProject.description}
              </p>

              <div className="mt-12 space-y-4">

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                block
                tracking-[4px]
                text-[#FF69D5]
                transition-all
                duration-300
                hover:text-[#FF69D5]
                hover:translate-x-2
                hover:scale-105
              "
                >
                  GITHUB →
                </a>

                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                  block
                  tracking-[4px]
                  text-[#FF69D5]
                  transition-all
                  duration-300
                  hover:text-[#FF69D5]
                  hover:translate-x-2
                  hover:scale-105
                "
                  >
                    LIVE DEMO →
                  </a>
                )}

                {activeProject.download && (
                  <a
                    href={activeProject.download}
                    target="_blank"
                    rel="noreferrer"
                    className="
                  block
                  tracking-[4px]
                  text-[#FF69D5]
                  transition-all
                  duration-300
                  hover:text-[#FF69D5]
                  hover:translate-x-2
                  hover:scale-105
                "
                  >
                    DOWNLOAD →
                  </a>
                )}

              </div>

            </div>

          )}

        </div>

        <div className="h-[220px] md:h-[200px]" />

      </div>
    </div>
  );
}