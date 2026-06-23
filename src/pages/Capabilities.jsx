import { useState } from "react";
import { Link } from "react-router-dom";

export default function Capabilities() {

    const capabilities = [
        {
            title: "USER-FIRST APPROACH",
            description:
                "Understanding users, their workflows, frustrations, and goals before making design, product, or technical decisions.",
            projects: [
                "BridgeNet",
                "Bill Set",
                "Open Shelf",
                "Secure Vault",
                "Portfolio",
            ],
        },

        {
            title: "PROBLEM FRAMING",
            description:
                "Looking beyond symptoms to identify the actual problem worth solving before deciding on a solution.",
            projects: [
                "BridgeNet",
                "Bill Set",
                "NSE Pattern Discovery Tool",
                "Pixiebooth",
            ],
        },

        {
            title: "RESEARCH & DISCOVERY",
            description:
                "Exploring markets, workflows, constraints, and existing solutions to reduce assumptions and guide better decisions.",
            projects: [
                "BridgeNet",
                "Bill Set",
                "NSE Pattern Discovery Tool",
                "KYC Verification Service",
            ],
        },

        {
            title: "SYSTEM THINKING",
            description:
                "Understanding how users, workflows, business objectives, and technology interact as part of a larger system.",
            projects: [
                "BridgeNet",
                "Secure Vault",
                "Authentication Service",
                "KYC Verification Service",
                "Image Microservice",
            ],
        },

        {
            title: "PRODUCT THINKING",
            description:
                "Balancing user needs, business goals, implementation effort, and long-term sustainability when making product decisions.",
            projects: [
                "BridgeNet",
                "Bill Set",
                "Open Shelf",
                "Secure Vault",
            ],
        },

        {
            title: "STORYTELLING & COMMUNICATION",
            description:
                "Using narrative, structure, interfaces, and content to make ideas understandable, memorable, and engaging.",
            projects: [
                "Open Shelf",
                "Portfolio",
                "Love Beyond Power",
                "No One Killed Vaidehi",
                "What We Carry After",
            ],
        },
    ];

    const [activeCapability, setActiveCapability] = useState(
        capabilities[0]
    );

    
    
    return (
        <div className="relative min-h-screen text-white bg-[#0B0008] overflow-hidden">

            {/* Background Glow */}
            <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(
        circle at 78% 35%,
        rgba(255,105,213,0.75) 0%,
        rgba(170,60,180,0.45) 20%,
        rgba(80,20,70,0.15) 45%,
        rgba(11,0,8,1) 70%
      )
    `,
  }}
/>
<div className="relative z-10">

            {/* Navigation */}
            <div
  className="
    pt-8
    flex
    flex-wrap
    justify-center
    gap-x-6
    gap-y-3
    text-white/60
    tracking-[2px]
    text-xs
    md:text-sm
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
            ">HOME</Link>
                <Link
                    to="/Projects"
                    className="
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105
            "
                >PROJECTS</Link>
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
                    to="/beyond-code"
                    className="
              transition-all
              duration-300
              hover:text-[#FF69D5]
              hover:translate-x-2
              hover:scale-105
            "
                >BEYOND CODE</Link>

            </div>

            {/* Hero */}
            <section className="mt-20 px-20">

                <h1 className="garet-font text-4xl md:text-7xl">
                    CAPABILITIES
                </h1>

                <p className="mt-6 text-white/50 max-w-sm leading-relaxed px-8">
                    Not what I know.
                    <br />
                    What I contribute.
                </p>

            </section>

            {/* Desktop */}
            <section className="hidden lg:grid grid-cols-[350px_1fr] gap-24 px-20 mt-12">

                {/* Left Panel */}

                <div>

                    <h2 className="garet-font text-3xl text-[#FF69D5]">
                        {activeCapability.title}
                    </h2>

                    <p className="mt-8 text-white/70 leading-relaxed">
                        {activeCapability.description}
                    </p>

                    <div className="mt-10 space-y-4">

                        <p className="mt-12 mb-6 text-sm tracking-[4px] text-white/50">
                            PROJECTS SUPPORTING IT
                        </p>

                        {activeCapability.projects.map((project) => (
                            <div
                                key={project}
                                className="
                text-[#FF69D5]
                tracking-[3px]
                hover:translate-x-1
                transition-all
                duration-300
              "
                            >
                                {project}
                            </div>
                        ))}

                    </div>

                </div>

                {/* Right Side */}

                <div className="relative h-[520px] w-full">

                    {/* Center */}

                    <div
                        className="
                        absolute
                        left-1/2
                        top-[45%]
                        -translate-x-1/2
                        -translate-y-1/2
                        text-center
                        "
                    >
                        <h2 className="garet-font text-5xl text-[#FF69D5] leading-none">
                            HOW I
                            <br />
                            CREATE VALUE
                        </h2>
                    </div>

                    {/* Top Left */}
                        
                    <div
  className="
    absolute
    top-0
    left-[30%]
    text-center
  "
>

  <button
    onClick={() => setActiveCapability(capabilities[2])}
    className={`
      transition-all
      duration-300
      hover:text-[#FF69D5]
      hover:scale-105

      ${
        activeCapability.title === capabilities[2].title
          ? "text-[#FF69D5] scale-105"
          : "text-white"
      }
    `}
  >
    RESEARCH &
    <br />
    DISCOVERY
  </button>

  <div
    className="
      h-3
      w-3
      rounded-full
      bg-[#FF69D5]
      shadow-[0_0_25px_#FF69D5]
      mx-auto
      mt-4
    "
  />

</div>
                    
                    

                    {/* Top Right */}

                    <div
  className="
    absolute
    top-0
    right-[15%]
    text-center
  "
>

  <button
    onClick={() => setActiveCapability(capabilities[1])}
    className={`
      transition-all
      duration-300
      hover:text-[#FF69D5]
      hover:scale-105

      ${
        activeCapability.title === capabilities[1].title
          ? "text-[#FF69D5] scale-105"
          : "text-white"
      }
    `}
  >
    PROBLEM
    <br />
    FRAMING
  </button>

  <div
    className="
      h-3
      w-3
      rounded-full
      bg-[#FF69D5]
      shadow-[0_0_25px_#FF69D5]
      mx-auto
      mt-4
    "
  />

</div>

                    {/* Left */}

                    <div
  className="
    absolute
    left-[8%]
    top-1/2
    -translate-y-1/2
    text-center
  "
>

  <button
    onClick={() => setActiveCapability(capabilities[0])}
    className={`
      transition-all
      duration-300
      hover:text-[#FF69D5]
      hover:scale-105

      ${
        activeCapability.title === capabilities[0].title
          ? "text-[#FF69D5] scale-105"
          : "text-white"
      }
    `}
  >
    USER-FIRST
    <br />
    APPROACH
  </button>

  <div
    className="
      h-3
      w-3
      rounded-full
      bg-[#FF69D5]
      shadow-[0_0_25px_#FF69D5]
      mx-auto
      mt-4
    "
  />

</div>

                    {/* Right */}

                    <div
  className="
    absolute
    right-[5%]
    top-1/2
    -translate-y-1/2
    text-center
  "
>

  <button
    onClick={() => setActiveCapability(capabilities[4])}
    className={`
      transition-all
      duration-300
      hover:text-[#FF69D5]
      hover:scale-105

      ${
        activeCapability.title === capabilities[4].title
          ? "text-[#FF69D5] scale-105"
          : "text-white"
      }
    `}
  >
    PRODUCT
    <br />
    THINKING
  </button>

  <div
    className="
      h-3
      w-3
      rounded-full
      bg-[#FF69D5]
      shadow-[0_0_25px_#FF69D5]
      mx-auto
      mt-4
    "
  />

</div>

                    {/* Bottom Left */}

                    <div
  className="
    absolute
    bottom-0
    left-[30%]
    text-center
  "
>

  <button
    onClick={() => setActiveCapability(capabilities[3])}
    className={`
      transition-all
      duration-300
      hover:text-[#FF69D5]
      hover:scale-105

      ${
        activeCapability.title === capabilities[3].title
          ? "text-[#FF69D5] scale-105"
          : "text-white"
      }
    `}
  >
    SYSTEM
    <br />
    THINKING
  </button>

  <div
    className="
      h-3
      w-3
      rounded-full
      bg-[#FF69D5]
      shadow-[0_0_25px_#FF69D5]
      mx-auto
      mb-4
    "
  />

</div>

                    {/* Bottom Right */}

                    <div
  className="
    absolute
    bottom-0
    right-[10%]
    text-center
  "
>

  <button
    onClick={() => setActiveCapability(capabilities[5])}
    className={`
      transition-all
      duration-300
      hover:text-[#FF69D5]
      hover:scale-105

      ${
        activeCapability.title === capabilities[5].title
          ? "text-[#FF69D5] scale-105"
          : "text-white"
      }
    `}
  >
    STORYTELLING &
    <br />
    COMMUNICATION
  </button>

  <div
    className="
      h-3
      w-3
      rounded-full
      bg-[#FF69D5]
      shadow-[0_0_25px_#FF69D5]
      mx-auto
      mb-4
    "
  />

</div>

                </div>

            </section>

            {/* Mobile */}

            <section className="lg:hidden px-6 mt-16">

                <div className="space-y-7">

                    {capabilities.map((capability) => (

                        <button
                            key={capability.title}
                            onClick={() => setActiveCapability(capability)}
                            className={`
              block
              text-left
              tracking-[3px]
              transition-all
              hover:text-[#FF69D5]
              hover:translate-x-1
              hover:scale-105
              duration-300

              ${activeCapability.title === capability.title
  ? "text-[#FF69D5] scale-105 text-lg"
  : "text-white/50"
}
            `}
                        >
                            {capability.title}
                        </button>

                    ))}

                </div>

                <div className="mt-12 max-w-sm ">

                    <h2 className="garet-font text-3xl text-[#FF69D5]">
                        {activeCapability.title}
                    </h2>

                    <p className="mt-6 text-white/70 leading-relaxed">
                        {activeCapability.description}
                    </p>

                    <p className="mb-6 text-xs tracking-[4px] text-white/50">
  PROJECTS SUPPORTING IT
</p>

                    <div className="mt-8 space-y-3">

                        {activeCapability.projects.map((project) => (
                            <div
                                key={project}
                                className="tracking-[3px] text-[#FF69D5]"
                            >
                                {project} →
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            <div className="h-64" />

        </div>
        </div>
    );

}