// src/pages/Home.jsx

export default function Home() {
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

      {/* Subtle Noise */}
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
      <div className="absolute left-24 top-[42%] z-20 flex flex-col gap-8">

        {[
          "PROJECTS",
          "JOURNEY",
          "CAPABILITIES",
          "CONTACT",
        ].map((item) => (
          <button
            key={item}
            className="group flex w-fit items-center gap-10 text-left text-[20px] tracking-[3px] text-[#FF69D5] transition-all duration-300 hover:scale-[1.05]"
          >
            <span className="garet-font">{item}</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        ))}
      </div>

      {/* Main Composition */}
      <div className="relative z-10 flex h-full flex-col items-center pt-[5%]">

        {/* Title */}
        <h1 className="garet-font text-[72px] font-light tracking-[6px] text-white whitespace-nowrap">
          AGRAWAL CHIRAG
        </h1>

        {/* Subtitle */}
        <div className="mt-4 w-[720px]">
          <p className="garet-font text-left text-[13px] tracking-[1px] text-white/85">
            • SYSTEMS &nbsp;&nbsp;&nbsp;
            • STORIES &nbsp;&nbsp;&nbsp;
            • INTERACTIONS
          </p>
        </div>

        {/* Floating Photo */}
        <div className="mt-10">

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="placeholder"
            className="w-[270px] object-cover opacity-95 drop-shadow-[0_35px_70px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>
    </div>
  );
}