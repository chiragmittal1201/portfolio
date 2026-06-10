import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Perspective() {
  const [activeNode, setActiveNode] = useState(null);
  const [selectedPath, setSelectedPath] = useState(null);
  const [expandedSteps, setExpandedSteps] = useState([]);

  const cardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedNode =
        event.target.closest("[data-node]");

      const clickedCard =
        cardRef.current &&
        cardRef.current.contains(event.target);

      if (!clickedNode && !clickedCard) {
        setActiveNode(null);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const nodeInfo = {
    idea: {
      title: "IDEA",
      text: "Most projects begin with a question, observation, or possibility worth exploring.",
    },

    system: {
      title: "SYSTEM",
      text: "Before building anything, I try to understand what needs to exist, how the parts connect, and what the idea is actually trying to accomplish.",
    },

    audience: {
      title: "AUDIENCE",
      text: "If I can't clearly identify who benefits from something, the idea usually isn't ready.",
    },

    features: {
      title: "FEATURES",
      text: "I focus on what absolutely needs to exist first before thinking about everything else.",
    },

    feasibility: {
      title: "FEASIBILITY",
      text: "This is where I decide whether an idea can realistically serve the purpose it was intended for.",
    },

    software: {
      title: "SOFTWARE",
      text: "If the idea becomes software, the next step is designing how people will interact with it.",
    },

    book: {
      title: "BOOK",
      text: "Stories follow a different path. The focus shifts from interaction to narrative structure.",
    },

    ux: {
      title: "UX",
      text: "I think about the experience first. The interface evolves around that experience.",
    },

    scripting: {
      title: "SCRIPTING",
      text: "Before writing, I usually build the structure of the story and understand where it is going.",
    },

    production: {
      title: "PRODUCTION",
      text: "This is where ideas begin turning into something tangible.",
    },

    writing: {
      title: "WRITING",
      text: "The script becomes the actual story through drafting, revision, and refinement.",
    },

    iteration: {
      title: "ITERATION",
      text: "Nothing is finished in the first version. Improvement comes from repeated refinement.",
    },

    publishing: {
      title: "PUBLISHING",
      text: "Once the story is complete, it becomes available for readers rather than remaining an idea.",
    },

    deployment: {
      title: "DEPLOYMENT",
      text: "The product becomes accessible to the people it was built for.",
    },

    marketing: {
      title: "MARKETING",
      text: "Building something is only part of the process. People need to know it exists.",
    },

    maintenance: {
      title: "MAINTENANCE",
      text: "Systems evolve after release. Maintenance is part of the creation process, not an afterthought.",
    },
  };

  const Node = ({ id, children }) => (
    <button
      data-node
      onClick={() =>
        setActiveNode(activeNode === id ? null : id)
      }
      className="
        garet-font
        rounded-xl
        border
        border-white/15
        bg-white/5
        px-5
        py-3
        text-sm
        tracking-[2px]
        text-white/90
        transition-all
        duration-300
        hover:scale-[1.05]
        hover:border-[#FF69D5]/40
      "
    >
      {children}
    </button>
  );

  const mobilePathNodes = {
    software: [
      "software",
      "ux",
      "production",
      "iteration",
      "deployment",
      "marketing",
      "maintenance",
    ],
    book: ["book", "scripting", "writing", "publishing"],
  };

  const activatePath = (path) => {
    if (selectedPath === path) return;
    setSelectedPath(path);
    setExpandedSteps([]);
    setActiveNode(null);
  };

  const toggleStep = (nodeId) => {
    setExpandedSteps((steps) =>
      steps.includes(nodeId)
        ? steps.filter((step) => step !== nodeId)
        : [...steps, nodeId]
    );
  };

  const MobileStep = ({ nodeId, isExpanded }) => (
    <div className="space-y-4 transition-all duration-300 ease-out">
      <button
        type="button"
        onClick={() => toggleStep(nodeId)}
        className={`garet-font w-full rounded-2xl border px-5 py-4 text-sm tracking-[2px] transition-all duration-300 ${
          isExpanded
            ? "border-[#FF69D5]/60 bg-[#FF69D5]/15 text-white shadow-[0_0_20px_rgba(255,105,213,0.25)]"
            : "border-white/15 bg-white/5 text-white/90 hover:border-[#FF69D5]/40"
        }`}
      >
        {nodeInfo[nodeId].title}
      </button>

      {isExpanded && (
        <div className="rounded-3xl border border-white/10 bg-[#160013]/95 p-5 text-white/80 shadow-[0_0_40px_rgba(255,105,213,0.1)]">
          <h3 className="garet-font text-lg tracking-[3px] text-[#FF69D5]">
            {nodeInfo[nodeId].title}
          </h3>
          <p className="mt-4 leading-7 text-white/80">
            {nodeInfo[nodeId].text}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#0B0008] text-white overflow-hidden">

      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 76% 50%,
              rgba(210,70,180,0.75) 0%,
              rgba(140,50,160,0.5) 28%,
              rgba(50,0,30,0.15) 55%,
              rgba(11,0,8,1) 75%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 md:hidden">
        <div className="flex w-full flex-col items-center gap-3">
          <Link
            to="/"
            className="
              garet-font
              w-full
              rounded-full
              border
              border-[#FF69D5]/20
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
            HOME
          </Link>

          <Link
            to="/projects"
            className="
              garet-font
              w-full
              rounded-full
              border
              border-[#FF69D5]/20
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
            PROJECTS
          </Link>

          <Link
            to="/beyond-code"
            className="
              garet-font
              w-full
              rounded-full
              border
              border-[#FF69D5]/20
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
            BEYOND CODE
          </Link>

          <Link
            to="/capabilities"
            className="
              garet-font
              w-full
              rounded-full
              border
              border-[#FF69D5]/20
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
            CAPABILITIES
          </Link>
        </div>

        <h1
          className="
            garet-font
            mt-8
            text-center
            text-[16px]
            tracking-[6px]
            text-[#FF69D5]
          "
        >
          PERSPECTIVE
        </h1>

        <h2
          className="
            garet-font
            mx-auto
            mt-5
            max-w-[46ch]
            text-center
            text-[clamp(2rem,5vw,2.8rem)]
            leading-[1.05]
            text-white
          "
        >
          Whether it's software, stories, or systems,
          I tend to think in processes rather than
          finished products.
        </h2>

        <p
          className="
            garet-font
            mx-auto
            mt-5
            max-w-[46ch]
            text-center
            text-base
            leading-7
            text-white/75
          "
        >
          Most of my work begins with an idea, but what
          interests me most is understanding how that
          idea becomes something real. I usually think
          about the system, the people it serves, the
          constraints around it, and the path it needs
          to take before it ever becomes a finished
          product.
        </p>

        <p
          className="
            garet-font
            mt-10
            text-center
            text-sm
            tracking-[5px]
            text-white/40
          "
        >
          PROCESS AS EVIDENCE
        </p>

        <div className="mt-8 space-y-8">
          {['idea', 'system', 'audience', 'features', 'feasibility'].map((nodeId, index, list) => {
            const isExpanded = expandedSteps.includes(nodeId);
            return (
              <div key={nodeId} className="space-y-4">
                <MobileStep nodeId={nodeId} isExpanded={isExpanded} />
                {index !== list.length - 1 && (
                  <div className="text-center text-2xl text-white/40">↓</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="garet-font text-sm tracking-[5px] text-white/40">
            CHOOSE A PATH
          </p>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => activatePath("software")}
              className={`garet-font flex-1 rounded-full border px-5 py-3 text-sm tracking-[2px] transition-all duration-300 ${
                selectedPath === "software"
                  ? "border-[#FF69D5]/40 bg-[#FF69D5]/15 text-[#FF69D5] shadow-[0_0_30px_rgba(255,105,213,0.18)]"
                  : "border-white/10 bg-white/5 text-white/80 hover:border-[#FF69D5]/30"
              }`}
            >
              SOFTWARE
            </button>
            <button
              onClick={() => activatePath("book")}
              className={`garet-font flex-1 rounded-full border px-5 py-3 text-sm tracking-[2px] transition-all duration-300 ${
                selectedPath === "book"
                  ? "border-[#FF69D5]/40 bg-[#FF69D5]/15 text-[#FF69D5] shadow-[0_0_30px_rgba(255,105,213,0.18)]"
                  : "border-white/10 bg-white/5 text-white/80 hover:border-[#FF69D5]/30"
              }`}
            >
              BOOK
            </button>
          </div>
        </div>

        {selectedPath && (
          <div className="mt-8 space-y-8">
            {mobilePathNodes[selectedPath].map((nodeId, index, list) => {
              const isExpanded = expandedSteps.includes(nodeId);
              return (
                <div key={nodeId} className="space-y-4">
                  <MobileStep nodeId={nodeId} isExpanded={isExpanded} />
                  {index !== list.length - 1 && (
                    <div className="text-center text-2xl text-white/40">↓</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="h-[220px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 hidden md:block">
        <div
          className="
            mb-20
            flex
            justify-center
            gap-10
            text-sm
            tracking-[3px]
            text-white/50
          "
        >

          <Link
            to="/"
            className="
      garet-font
      transition-all
      duration-300
      ease-out
      hover:scale-[1.05]
      hover:text-[#FF69D5]
    "
          >
            HOME
          </Link>

          <Link
            to="/projects"
            className="
      garet-font
      transition-all
      duration-300
      ease-out
      hover:scale-[1.05]
      hover:text-[#FF69D5]
    "
          >
            PROJECTS
          </Link>

          <Link
            to="/beyond-code"
            className="
      garet-font
      transition-all
      duration-300
      ease-out
      hover:scale-[1.05]
      hover:text-[#FF69D5]
    "
          >
            BEYOND CODE
          </Link>

          <Link
            to="/capabilities"
            className="
      garet-font
      transition-all
      duration-300
      ease-out
      hover:scale-[1.05]
      hover:text-[#FF69D5]
    "
          >
            CAPABILITIES
          </Link>

        </div>

        {/* Title */}
        <h1
          className="
            garet-font
            text-center
            text-[18px]
            tracking-[6px]
            text-[#FF69D5]
          "
        >
          PERSPECTIVE
        </h1>

        {/* Hero */}
        <h2
          className="
            garet-font
            mx-auto
            mt-12
            max-w-5xl
            text-center
            text-5xl
            leading-tight
            text-white
          "
        >
          Whether it's software, stories, or systems,
          I tend to think in processes rather than
          finished products.
        </h2>

        {/* Supporting Paragraph */}
        <p
          className="
            garet-font
            mx-auto
            mt-10
            max-w-3xl
            text-center
            text-lg
            leading-9
            text-white/75
          "
        >
          Most of my work begins with an idea, but what
          interests me most is understanding how that
          idea becomes something real. I usually think
          about the system, the people it serves, the
          constraints around it, and the path it needs
          to take before it ever becomes a finished
          product.
        </p>

        {/* Evidence Label */}
        <p
          className="
            garet-font
            mt-28
            text-center
            text-sm
            tracking-[5px]
            text-white/40
          "
        >
          PROCESS AS EVIDENCE
        </p>

        {/* Process Map */}
        <div
          className="mt-20 flex flex-col items-center gap-8"
        >
          <Node id="idea">IDEA</Node>
          ↓

          <Node id="system">SYSTEM</Node>
          ↓

          <Node id="audience">AUDIENCE</Node>
          ↓

          <Node id="features">FEATURES</Node>
          ↓

          <Node id="feasibility">FEASIBILITY</Node>

          <div className="mt-6 flex gap-32">

            <div className="flex flex-col items-center gap-8">

              <Node id="software">SOFTWARE</Node>
              ↓

              <Node id="ux">UX</Node>
              ↓

              <Node id="production">PRODUCTION</Node>
              ↓

              <Node id="iteration">ITERATION</Node>
              ↓

              <Node id="deployment">DEPLOYMENT</Node>
              ↓

              <Node id="marketing">MARKETING</Node>
              ↓

              <Node id="maintenance">MAINTENANCE</Node>

            </div>

            <div className="flex flex-col items-center gap-8">

              <Node id="book">BOOK</Node>
              ↓

              <Node id="scripting">SCRIPTING</Node>
              ↓

              <Node id="writing">WRITING</Node>
              ↓

              <Node id="publishing">PUBLISHING</Node>

            </div>

          </div>

        </div>

        {/* Floating Card */}
        {activeNode && (
          <div
            ref={cardRef}
            className="
              fixed
              right-10
              top-1/2
              z-50
              w-[320px]
              -translate-y-1/2
              rounded-2xl
              border
              border-white/10
              bg-[#160013]
              p-6
              backdrop-blur-xl
              shadow-[0_0_40px_rgba(255,105,213,0.15)]
            "
          >
            <h3
              className="
                garet-font
                text-lg
                tracking-[3px]
                text-[#FF69D5]
              "
            >
              {nodeInfo[activeNode].title}
            </h3>

            <p
              className="
                garet-font
                mt-4
                leading-8
                text-white/80
              "
            >
              {nodeInfo[activeNode].text}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}