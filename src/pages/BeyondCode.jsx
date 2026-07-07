import { Link } from "react-router-dom";

import wallDesktop from "../assets/images/beyond-code-wall-desktop.png";
import wallMobile from "../assets/images/beyond-code-wall-mobile.webp";

import loveBeyondPower from "../assets/images/love-beyond-power.png";
import birthdayWebsite from "../assets/images/birthday-website.png";
import noOneKilledVaidehi from "../assets/images/no-one-killed-vaidehi.png";
import whatWeCarryAfter from "../assets/images/what-we-carry-after.png";

export default function BeyondCode() {
  const projects = [
    {
      title: "LOVE BEYOND POWER",
      type: "Novel",
      image: loveBeyondPower,
      link: "https://open-shelf.netlify.app/books/a-love-beyond-power/",
    },

    {
      title: "BIRTHDAY WEBSITE",
      type: "Interactive Experience",
      image: birthdayWebsite,
      link: "https://project-gubbara.vercel.app/",
    },

    {
      title: "NO ONE KILLED VAIDEHI",
      type: "Mystery Novel",
      image: noOneKilledVaidehi,
      link: "https://open-shelf.netlify.app/books/no-one-killed-vaidehi/",
    },

    {
      title: "WHAT WE CARRY AFTER",
      type: "On hold",
      image: whatWeCarryAfter,
      link: "https://open-shelf.netlify.app/books/what-we-carry-after/",
    },
  ];

  const isExternalLink = (url) => typeof url === "string" && url.startsWith("http");

  const ProjectLink = ({ href, className, children }) =>
    isExternalLink(href) ? (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={href} className={className}>
        {children}
      </Link>
    );

  const renderProjectCard = (project) => (
    <div key={project.title} className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-4 text-xl">
          📌
        </div>

        <ProjectLink href={project.link} className="block">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-[360px]
              w-[250px]
              rounded-md
              object-cover
              shadow-xl
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
            "
          />
        </ProjectLink>
      </div>

      <h3 className="garet-font mt-8 text-center text-lg tracking-[3px]">{project.title}</h3>

      <p className="mt-2 text-center text-white/50">{project.type}</p>

      <ProjectLink
        href={project.link}
        className="mt-5 text-sm tracking-[2px] text-[#FF69D5]/80 transition-all duration-300 hover:text-[#FF69D5]"
      >
        OPEN →
      </ProjectLink>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white">

      {/* Background */}

      <div className="fixed inset-0 -z-10">

        <img
          src={wallDesktop}
          alt=""
          className="
            hidden
            h-full
            w-full
            object-cover
            md:block
          "
        />

        <img
          src={wallMobile}
          alt=""
          className="
            block
            h-full
            w-full
            object-cover
            md:hidden
          "
        />

        <div className="absolute inset-0 bg-black/55" />

      </div>

      <div className="relative z-10 px-6 py-20 md:px-12">

        {/* Navigation */}

        <div
          className="
            mb-24
            flex
            flex-wrap
            justify-center
            gap-8
            text-sm
            tracking-[3px]
            text-white/50
          "
        >
          <Link
            to="/"
            className="
              transition-all
              duration-300
              hover:scale-105
              hover:text-[#FF69D5]
              hover:scale-105
            "
          >
            HOME
          </Link>

          <Link
            to="/projects"
            className="
              transition-all
              duration-300
              hover:scale-105
              hover:text-[#FF69D5]
              hover:scale-105
            "
          >
            PROJECTS
          </Link>

          <Link
            to="/perspective"
            className="
              transition-all
              duration-300
              hover:scale-105
              hover:text-[#FF69D5]
              hover:scale-105
            "
          >
            PERSPECTIVE
          </Link>

          <Link
            to="/capabilities"
            className="
              transition-all
              duration-300
              hover:scale-105
              hover:text-[#FF69D5]
              hover:scale-105
            "
          >
            CAPABILITIES
          </Link>
        </div>

        {/* Hero */}


        <h2
          className="
            garet-font
            mx-auto
            mt-10
            max-w-5xl
            text-center
            text-4xl
            leading-tight
            md:text-6xl
          "
        >
          Some ideas become software.
          <br />
          Some become stories.
        </h2>

        {/* Projects */}

        <div
          className="
            mx-auto
            mt-28
            grid
            max-w-7xl
            grid-cols-1
            gap-16
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {projects.map(renderProjectCard)}
        </div>

        <div className="h-[160px] md:hidden" />

      </div>
    </div >
  );
}