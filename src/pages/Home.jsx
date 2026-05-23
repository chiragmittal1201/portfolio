import { useState } from "react";

export default function Home() {

  const [activeSection, setActiveSection] = useState("home");

  return (

    <div className="relative h-screen w-screen overflow-hidden bg-[#0B0008] text-white">

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

      {/* Garet Font */}
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/garet');

          .garet-font {
            font-family: 'Garet', sans-serif;
          }
        `}
      </style>

      {/* Logo */}
      <div className="absolute left-24 top-16 z-20">
        <div className="h-4 w-4 rotate-45 border border-white/60"></div>
      </div>

      {/* Navigation */}
      <div className="absolute left-24 top-[40%] z-20 flex flex-col gap-9">

        {[
          "PROJECTS",
          "PERSPECTIVE",
          "CAPABILITIES",
          "CONTACT",
        ].map((item) => (

          <button
            key={item}
            onClick={() => setActiveSection(item.toLowerCase())}
            className="
              group
              flex
              w-fit
              items-center
              gap-12
              text-left
              text-[20px]
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
      <div className="relative z-10 flex h-full flex-col items-center pt-[6%]">

        {/* Main Title */}
        <h1 className="garet-font whitespace-nowrap text-[76px] font-light tracking-[6px] text-white">
          AGRAWAL CHIRAG
        </h1>

        {/* Subtitle */}
        <p className="garet-font mt-3 text-[15px] font-medium tracking-[1px] text-white/90">
          • SYSTEMS &nbsp;&nbsp;&nbsp;
          • STORIES &nbsp;&nbsp;&nbsp;
          • INTERACTIONS
        </p>

        {/* Dynamic Right Panel */}
        <div className="mt-20 flex flex-col items-center">

          {/* HOME STATE */}
          {activeSection === "home" && (

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="placeholder"
              className="
                w-[270px]
                object-cover
                opacity-95
                drop-shadow-[0_35px_70px_rgba(0,0,0,0.65)]
              "
            />

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

              <button
                className="
                  garet-font
                  mt-24
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

              </button>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}