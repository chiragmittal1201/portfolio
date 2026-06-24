import { useState } from "react";
import instagramIcon from "../images/instagram.png";
import githubIcon from "../images/github.png";
import linkedinIcon from "../images/linkedin.png";
import gmailIcon from "../images/gmail.png";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.jpg";

export default function Home() {

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    "PROJECTS",
    "BEYOND CODE",
    "PERSPECTIVE",
    "CAPABILITIES",
    "CONTACT",
  ];

  return (

    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0B0008] text-white">
      {/* Root wrapper allows vertical content growth on mobile; it is not forcing a fixed content height. */}

      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 76% 50%,
              rgba(210, 70, 180, 0.78) 0%,
              rgba(140, 50, 160, 0.52) 28%,
              rgba(50, 0, 30, 0.16) 55%,
              rgba(11, 0, 8, 1) 75%
            )
          `,
        }}
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_0.4px,transparent_0.4px)] bg-[size:6px_6px]" />


      {/* Logo */}
      <div className="absolute left-6 top-6 z-20 md:left-24 md:top-16">
        <div className="h-4 w-4 rotate-45 border border-white/60"></div>
      </div>

      {/* Navigation */}
      <div
        className="
    hidden
    md:absolute
    md:bottom-8
    md:left-1/2
    md:z-20
    md:flex
    md:flex-wrap
    md:justify-center
    md:gap-4
    md:-translate-x-1/2
    md:left-24
    md:top-[40%]
    md:bottom-auto
    md:translate-x-0
    md:flex-col
    md:gap-9
  "
      >

        {navItems.map((item) => (

          <button
            key={item}
            onClick={() => setActiveSection(item.toLowerCase())}
            className="
          group
          flex
          w-fit
          items-center
          gap-2
          md:gap-12
          text-left
          text-[14px]
          md:text-[20px]
          tracking-[3px]
          text-[#FF69D5]
          transition-all
          duration-300
          ease-out
          hover:scale-[1.05]
        "
          >

            <span className="garet-font">
              {item}
            </span>

            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>

          </button>

        ))}

      </div>

      {/* Main Composition */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-6 pb-[160px] md:pt-[6%] md:px-0 md:pb-0">
        {/* Main content wrapper uses normal flow and mobile-friendly spacing. */}
        {/* Removing h-full here avoids fixing the page height so mobile sections can grow fully. */}

        {/* Main Title */}
        <button
          onClick={() => setActiveSection("home")}
          className="
    garet-font
    text-center
    text-[clamp(2.2rem,8vw,4rem)]
    md:text-[76px]
    font-light
    tracking-[6px]
    text-white
    transition-all
    duration-300
    ease-out
    hover:scale-[1.02]
    hover:text-white/90
    max-w-full
    break-words
  "
        >
          AGRAWAL CHIRAG
        </button>

        {/* Subtitle */}
        <p className="garet-font mt-2 md:mt-3 text-center text-[clamp(0.8rem,2.4vw,0.95rem)] font-medium tracking-[1px] text-white/90 max-w-full">
          • SYSTEMS • STORIES • INTERACTIONS
        </p>

        {/* Dynamic Right Panel */}
        <div className="mt-8 flex flex-col items-center md:mt-20">

          {/* HOME STATE */}
          {activeSection === "home" && (

            <img
              src={profileImage}
              alt="placeholder"
              className="
                w-[150px]
                sm:w-[190px]
                md:w-[270px]
                object-cover
                opacity-95
                drop-shadow-[0_35px_70px_rgba(0,0,0,0.65)]
              "
            />

          )}

          <div className="mt-4 flex w-full max-w-[330px] flex-col items-center gap-2 md:hidden">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border border-[#FF69D5]/20
                  bg-white/5
                  py-3
                  text-center
                  text-[15px]
                  tracking-[2px]
                  text-[#FF69D5]
                  transition-all
                  duration-300
                  ease-out
                  hover:bg-white/10
                  hover:scale-[1.01]
                "
              >
                <span className="garet-font">{item}</span>
              </button>
            ))}
          </div>

          {activeSection === "beyond code" && (

            <div className="flex flex-col items-center">

              <p className="garet-font max-w-[760px] text-center text-[18px] leading-[2.25] text-white/88">

                A collection of books, interactive experiences,
                and creative projects that explore ideas beyond
                traditional software development.

              </p>

              <Link
                to="/beyond-code"
                className="
                garet-font
                mt-12
                md:mt-24
                flex
                items-center
                gap-5
                text-[24px]
                tracking-[4px]
                text-[#FFDcf5]/80
                transition-all
                duration-300
                ease-out
                hover:scale-[1.05]
                hover:text-[#FFDcf5]
                      "
              >
                <span>ENTER BEYOND CODE</span>
                <span>→</span>
              </Link>

            </div>

          )}

          {/* PROJECTS STATE */}
          {activeSection === "projects" && (

            <div className="flex flex-col items-center">

              <p className="garet-font w-full max-w-full md:max-w-[760px] text-center text-[18px] leading-[2.25] text-white/88">

                From workflow systems and publishing platforms
                to games and interactive experiences, each
                project explores a different challenge,
                process, or idea.

              </p>

              <Link
                to="/projects"
                className="
        garet-font
        mt-16
        md:mt-24
        flex
        items-center
        gap-5
        text-[24px]
        tracking-[4px]
        text-[#FFDcf5]/80
        transition-all
        duration-300
        ease-out
        hover:scale-[1.05]
        hover:text-[#FFDcf5]
      "
              >

                <span>EXPLORE PROJECTS</span>

                <span className="transition-transform duration-300 ease-out">
                  →
                </span>

              </Link>

            </div>

          )}

          {/* PERSPECTIVE STATE */}
          {activeSection === "perspective" && (

            <div className="flex flex-col items-center">

              <p className="garet-font max-w-[760px] text-center text-[18px] leading-[2.25] text-white/88">

                Most of my work starts from curiosity, observation,
                or a system that feels unnecessarily complicated.
                I enjoy breaking things down, understanding how
                they function, and experimenting with ways to
                make them feel more interactive, structured,
                or meaningful.

              </p>

              <Link
                to="/perspective"
                className="
                garet-font
                mt-12
                md:mt-24
                flex
                items-center
                gap-5
                text-[24px]
                tracking-[4px]
                text-[#FFDcf5]/80
                transition-all
                duration-300
                ease-out
                hover:scale-[1.05]
                hover:text-[#FFDcf5]
              "
              >
                <span>OPEN PERSPECTIVE</span>

                <span className="transition-transform duration-300 ease-out hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          )}

          {/* CAPABILITIES STATE */}
          {activeSection === "capabilities" && (

            <div className="flex flex-col items-center">

              <p className="garet-font w-full max-w-full md:max-w-[760px] text-center text-[18px] leading-[2.25] text-white/88">

                An overview of the capabilities, tools, and
                disciplines that support the work showcased
                throughout this portfolio.

              </p>

              <Link
                to="/capabilities"
                className="
        garet-font
        mt-16
        md:mt-24
        flex
        items-center
        gap-5
        text-[24px]
        tracking-[4px]
        text-[#FFDcf5]/80
        transition-all
        duration-300
        ease-out
        hover:scale-[1.05]
        hover:text-[#FFDcf5]
      "
              >

                <span>EXPLORE CAPABILITIES</span>

                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          )}


          {/* CONTACT STATE */}
          {activeSection === "contact" && (

            <div className="mt-4 flex flex-col items-start gap-8">

              {/* Personal Instagram */}
              <a
                href="https://www.instagram.com/agrawal_chirag1201?igsh=ZWh5YnlseGs0Z2I5"
                target="_blank"
                rel="noreferrer"
                className="
        flex
        items-center
        gap-5
        text-white/90
        transition-all
        duration-300
        ease-out
        hover:scale-[1.03]
      "
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-8 w-8 object-contain"
                />

                <span className="garet-font text-[18px]">
                  Instagram · Personal Account
                </span>
              </a>

              {/* Creator Instagram */}
              <a
                href="https://www.instagram.com/mintmuse1201?igsh=MXUwMnBkM3AzN2U5bA=="
                target="_blank"
                rel="noreferrer"
                className="
        flex
        items-center
        gap-5
        text-white/90
        transition-all
        duration-300
        ease-out
        hover:scale-[1.03]
      "
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-8 w-8 object-contain"
                />

                <span className="garet-font text-[18px]">
                  Instagram · Creator Page
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/chiragmittal1201"
                target="_blank"
                rel="noreferrer"
                className="
        flex
        items-center
        gap-5
        text-white/90
        transition-all
        duration-300
        ease-out
        hover:scale-[1.03]
      "
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="h-8 w-8 object-contain"
                />

                <span className="garet-font text-[18px]">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/agrawal-chirag-686367202"
                target="_blank"
                rel="noreferrer"
                className="
        flex
        items-center
        gap-5
        text-white/90
        transition-all
        duration-300
        ease-out
        hover:scale-[1.03]
      "
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="h-8 w-8 object-contain"
                />

                <span className="garet-font text-[18px]">
                  LinkedIn
                </span>
              </a>

              {/* Gmail */}
              <div className="flex items-center gap-5 text-white/90">

                <a
                  href="mailto:chiragmittal1201@gmail.com"
                  className="
          transition-all
          duration-300
          ease-out
          hover:scale-[1.08]
        "
                >
                  <img
                    src={gmailIcon}
                    alt="Email"
                    className="h-8 w-8 object-contain"
                  />
                </a>

                <span
                  className="
          garet-font
          text-[18px]
          select-all
          cursor-text
        "
                >
                  chiragmittal1201@gmail.com
                </span>

              </div>

              {/* Resume Download */}
              <a
                href="/Chirag_Agrawal_Resume.pdf"
                download="Chirag_Agrawal_Resume.pdf"
                className="
    flex
    items-center
    gap-5
    text-white/90
    transition-all
    duration-300
    ease-out
    hover:scale-[1.03]
  "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V4m0 12l-4-4m4 4l4-4M5 20h14"
                  />
                </svg>

                <span className="garet-font text-[18px]">
                  Resume
                </span>

              </a>

            </div>

          )}

          <div className="h-[160px] w-full md:hidden" />

        </div>

      </div>

    </div>

  );
}
